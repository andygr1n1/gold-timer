import { IconPencilCode } from '@/assets/icons/IconPencilCode'
import { StyledButton } from '@/components/buttons/StyledButton'
import { observer } from 'mobx-react-lite'
import { useLabelDialog$ } from '../mst/provider'
import { cn } from '@/helpers/cn'

export const NotesLabelsDialogTrigger: React.FC = observer(() => {
    const { onOpen: onCLick } = useLabelDialog$()
    return (
        <StyledButton
            className={cn('!border-blue-600/20 hover:!bg-blue-600/20')}
            variant='outlined'
            onClick={onCLick}
            startIcon={<IconPencilCode />}
        />
    )
})
