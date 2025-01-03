import { IconTableView } from '@/assets/icons/IconTableView'
import { StyledButton } from '@/components/buttons/StyledButton'
import Tippy from '@tippyjs/react'
import { useGuestsFilters$ } from '../../mst/guestsFilters.provider'
import { observer } from 'mobx-react-lite'

export const TablesViewTrigger = observer(() => {
    const { tablesView, onChangeField } = useGuestsFilters$()

    return (
        <Tippy content='Tables view' interactive={true} className=''>
            <div className='flex items-center cursor-default gap-2'>
                <StyledButton
                    variant={tablesView ? 'contained' : 'outlined'}
                    startIcon={<IconTableView className='w-5 h-5' />}
                    onClick={() => {
                        onChangeField('tablesView', !tablesView)
                    }}
                ></StyledButton>
            </div>
        </Tippy>
    )
})
