import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { LabelFiltersSelectButton } from './LabelFiltersSelectButton'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { type INoteStatus } from '@/modules/notes/shared-services/types'
import { useState } from 'react'
import { XInput } from '@/components-x/x-input/XInput'
import { CreateLabelDialog } from './components/note-label/notes-labels-dialog/components/CreateLabelDialog'
import { LabelDialog$Provider, labelDialog$ } from './components/note-label/notes-labels-dialog/mst/provider'
import { NotesLabelsDialogTrigger } from './components/note-label/notes-labels-dialog/components/NotesLabelsDialogTrigger'
import { useFetchNotesLabels } from './components/note-label/notes-labels-dialog/service/useFetchNotesLabels'
import { IconCheck } from '@/assets/icons/IconCheck'
import { XSkeleton } from '@/components-x/x-skeleton/XSkeleton'
import { useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/helpers/cn'
import { sortBy } from 'lodash-es'

export const LabelFilterSelect: React.FC = () => {
    const [open, setOpen] = useState(false)

    const onClose = () => {
        setOpen(false)
    }

    return (
        <LabelDialog$Provider store={labelDialog$}>
            <XDropdown
                onOpenChange={(x) => {
                    setOpen(x)
                }}
                trigger={['hover']}
                open={open}
                dropdownRender={() => <DropdownRender onClose={onClose} />}
                placement='bottomRight'
                overlayClassName='!z-[55]'
            >
                <div>
                    <LabelFiltersSelectButton />
                </div>
            </XDropdown>
            <CreateLabelDialog />
        </LabelDialog$Provider>
    )
}

const DropdownRender: React.FC<{ onClose: (filter: INoteStatus) => void }> = () => {
    const { isLoading, data, onChange, filter } = useFetchNotesLabels()
    const location = useLocation()
    const navigate = useNavigate()
    const labelParam: string = location.state?.label

    const onSelect = (labelId: string) => {
        const isSelected = labelParam === labelId
        const searchParams = new URLSearchParams(location.search)
        isSelected ? searchParams.delete('label') : searchParams.set('label', labelId)

        navigate(
            { pathname: '/notes/filtered-notes', search: searchParams.toString() },
            { state: { ...location.state, label: isSelected ? null : labelId } },
        )
    }

    const sortedData = sortBy(data, (noteLabel) => (labelParam === noteLabel.id ? 0 : 1))

    return (
        <XMenuDropdown className='max-h-[400px] min-h-[160px] overflow-auto scrollbar-thumb-blue-500/50/50 scrollbar-track-global-bg scrollbar-thin'>
            <XMenuItem>
                <XInput value={filter} onChange={(e) => onChange(e.target.value)} />
                <NotesLabelsDialogTrigger />
            </XMenuItem>
            {isLoading ? (
                <XSkeleton length={2} />
            ) : (
                sortedData.map((noteLabel) => {
                    const isSelected = labelParam === noteLabel.id
                    return (
                        <XMenuItem
                            key={noteLabel.id}
                            onClick={() => {
                                onSelect(noteLabel.id)
                            }}
                        >
                            <StyledButton
                                startIcon={
                                    <div className='w-8 h-6'>
                                        {isSelected && (
                                            <IconCheck className='w-6 h-6 absolute left-[-3px] animate-opacity-3 text-blue-500' />
                                        )}
                                    </div>
                                }
                                className={cn('!w-full', isSelected && '!text-blue-500')}
                                variant='text'
                                size='small'
                            >
                                <span className='flex w-full capitalize'>{noteLabel.name}</span>
                            </StyledButton>
                        </XMenuItem>
                    )
                })
            )}
        </XMenuDropdown>
    )
}
