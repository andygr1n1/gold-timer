import { IconDeleteForever, IconEdit } from '@/assets/icons'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { observer } from 'mobx-react-lite'
import { type ICreateLabelForm } from '../../../service/types'
import { useLabelDialog$ } from '../../../mst/provider'
import { useDeleteNoteLabel } from './useDeleteNoteLabel'
import { type InputRef } from 'antd'

export const NLIDropdownRender: React.FC<{ label: ICreateLabelForm; inputEl?: InputRef | null }> = observer(
    ({ label, inputEl }) => {
        const { deleteNoteLabel } = useDeleteNoteLabel()
        const { toggleEdit, selectedLabel } = useLabelDialog$()
        const isSelected = selectedLabel === label.id
        return (
            <XMenuDropdown>
                <XMenuItem
                    onClick={() => {
                        toggleEdit({ id: label.id })
                        setTimeout(() => inputEl?.focus(), 5)
                    }}
                >
                    <StyledButton variant='text' size='small' startIcon={<IconEdit width={24} height={24} />}>
                        <span className='flex w-[110px] justify-start capitalize'>{isSelected ? 'Save' : 'Edit'}</span>
                    </StyledButton>
                </XMenuItem>
                <XMenuItem onClick={() => deleteNoteLabel({ id: label.id })}>
                    <StyledButton variant='text' size='small' startIcon={<IconDeleteForever width={24} height={24} />}>
                        <span className='flex w-[110px] justify-start capitalize'>Delete</span>
                    </StyledButton>
                </XMenuItem>
            </XMenuDropdown>
        )
    },
)
