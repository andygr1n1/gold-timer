import { rootStore$, useNotesStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { useEffect, useRef, useState } from 'react'
import { getNotes$LocalForage, setNotes$LocalForage } from '../../helpers/notesLocalForage'
import { INotesFilter$ } from '../../mst/types'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { useClickOutside } from '@/hooks/useClickOutside.hook'
import { useSelectedTagValidation } from '../../hooks/useSelectedTagValidation'

export const NotesTagsSelect: React.FC = observer(() => {
    const {
        notes,
        notes_filter$: { filteredTags, selected_tags, toggleSelectTag, tagIsSelected, notes_tag_filter, onChangeField },
    } = useNotesStore()

    const [loadingLocalForage, setLoadingLocalForage] = useState(true)
    const [openDropdownMenu, setOpenDropdownMenu] = useState(false)
    const dropdownButtonRef = useRef<null | HTMLDivElement>(null)
    useClickOutside(dropdownButtonRef, () => setOpenDropdownMenu(false))
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
        <div className='flex w-full flex-col md:flex-row'>
            <div
                ref={dropdownButtonRef}
                className='bg-global-3-bg border-global-2-bg relative z-20 flex h-10 w-full max-w-[300px] gap-3 rounded-md border-[1px] border-solid  px-2 hover:border-[#4f8af7]'
            >
                <span className='flex h-full w-fit items-center justify-center'>
                    <Icon icon='mi:filter' width={25} height={25} className='text-xBlue-2 animate-opacity-5' />
                </span>
                <input
                    placeholder='Filter by Tags'
                    className='text-cText w-full rounded-md border-none text-[14px] placeholder:text-gray-500'
                    onFocus={() => setOpenDropdownMenu(true)}
                    onClick={() => setOpenDropdownMenu(true)}
                    value={notes_tag_filter}
                    onChange={(e) => {
                        onChangeField('notes_tag_filter', e.target.value)
                    }}
                />
                {openDropdownMenu && (
                    <>
                        <div className='text-cText bg-global-2-bg absolute left-0 top-[41px] flex max-h-[300px] w-full flex-col overflow-auto  '>
                            {filteredTags.map((tag) => (
                                <div
                                    key={tag}
                                    className={clsx(
                                        'hover:text-xBlue-1 cursor-pointer p-2 duration-300',
                                        tagIsSelected(tag) && 'text-xBlue-2',
                                    )}
                                    onClick={() => toggleSelectTag(tag)}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className='animate-opacity-3 absolute right-0 top-0 flex h-full w-7 items-center justify-center duration-300'>
                            <Icon
                                icon='zondicons:close-solid'
                                onClick={() => onChangeField('selected_tags', cast([]))}
                                className='text-xBlue-2 hover:text-xBlue-1 h-4 w-4 cursor-pointer'
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
})
