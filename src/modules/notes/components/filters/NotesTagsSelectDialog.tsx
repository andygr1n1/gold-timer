import { rootStore$, useNotesStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { useEffect, useState } from 'react'
import { getNotes$LocalForage, setNotes$LocalForage } from '../../helpers/notesLocalForage'
import { INotesFilter$ } from '../../mst/types'
import clsx from 'clsx'
import { useSelectedTagValidation } from '../../hooks/useSelectedTagValidation'
import { XModal } from '@/components-x/x-modal/XModal'
import { FormLabel } from '@/components/form/FormLabel'
import { XInput } from '@/components-x/x-input/XInput'
import { XCheckbox } from '@/components-x/x-checkbox/XCheckbox'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconEraser } from '@/assets/icons'

export const NotesTagsSelectDialog: React.FC = observer(() => {
    const {
        onChangeField,
        tags_list_view,

        notes_filter$: {
            selected_tags,
            filteredTags,
            toggleSelectTag,
            tagIsSelected,
            notes_tag_filter,
            onChangeField: onChangeNotesFilter$,
        },
    } = useNotesStore()

    const [loadingLocalForage, setLoadingLocalForage] = useState(true)
    useSelectedTagValidation()

    useEffect(() => {
        const sprintFilters$ = rootStore$.notes$.notes_filter$
        let disposer: IDisposer | undefined
        ;(async () => {
            await getNotes$LocalForage().then((loadedFilter$) => {
                loadedFilter$ && rootStore$.notes$.onChangeField('notes_filter$', cast(loadedFilter$))
                disposer = onSnapshot(sprintFilters$, (store: INotesFilter$) => {
                    setNotes$LocalForage(store)
                })
                setLoadingLocalForage(false)
            })
        })()

        return () => {
            disposer?.()
        }
    }, [])

    if (loadingLocalForage) return null

    return (
        <XModal
            open={!!tags_list_view}
            onCancel={() => {
                onChangeField('tags_list_view', false)
            }}
            fullHeight
        >
            <FormLabel title='Search:' />
            <div className='flex gap-5'>
                <XInput
                    autoFocus={false}
                    value={notes_tag_filter}
                    onChange={(e) => onChangeNotesFilter$('notes_tag_filter', e.target.value)}
                    className='w-full'
                />
                <StyledButton
                    disabled={!selected_tags.length}
                    startIcon={<IconEraser width={24} height={24} />}
                    onClick={() => onChangeNotesFilter$('selected_tags', cast([]))}
                />
            </div>
            <div tabIndex={0} className=' my-10 flex flex-col gap-4'>
                {filteredTags.map((tag) => (
                    <div
                        key={tag}
                        className={clsx(
                            'flex cursor-pointer gap-2 p-2 duration-300 hover:text-blue-600',
                            tagIsSelected(tag) && 'text-blue-700',
                        )}
                        onClick={() => toggleSelectTag(tag)}
                    >
                        <XCheckbox checked={tagIsSelected(tag)} />
                        <span className={clsx('text-lg', tagIsSelected(tag) ? 'opacity-100' : 'opacity-70')}>
                            {tag}
                        </span>
                    </div>
                ))}
            </div>
        </XModal>
    )
})
