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
        notes_filter$: { filteredTags, toggleSelectTag, tagIsSelected, notes_tag_filter, onChangeField },
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
                    <Icon icon='mi:filter' width={25} height={25} className='animate-opacity-5 text-blue-700' />
                </span>
                <input
                    placeholder='Filter by tags'
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
                        <div className='text-cText bg-global-bg-plasma scrollbar-thumb-blue-500 scrollbar-track-global-bg scrollbar-thin absolute left-0 top-[41px] flex max-h-[300px] w-full flex-col overflow-auto shadow-2xl '>
                            {filteredTags.map((tag) => (
                                <div
                                    key={tag}
                                    className={clsx(
                                        'cursor-pointer p-2 duration-300 hover:text-blue-600',
                                        tagIsSelected(tag) && 'text-blue-700',
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
                                className='h-4 w-4 cursor-pointer text-blue-700 hover:text-blue-600'
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
})
