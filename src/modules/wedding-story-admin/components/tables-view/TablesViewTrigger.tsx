import { IconTableView } from '@/assets/icons/IconTableView'
import { StyledButton } from '@/components/buttons/StyledButton'
import Tippy from '@tippyjs/react'

export const TablesViewTrigger: React.FC = () => {
    return (
        <Tippy content='Tables view' interactive={true} className=''>
            <div className='flex items-center cursor-default gap-2'>
                <StyledButton variant='outlined' startIcon={<IconTableView />}></StyledButton>
            </div>
        </Tippy>
    )
}
