import { IconTableView } from '@/assets/icons/IconTableView'
import { StyledButton } from '@/components/buttons/StyledButton'
import Tippy from '@tippyjs/react'
import { selectTablesView, updateField } from '../../services/weddingStoryFiltersSlice'
import { useAppDispatch, useAppSelector } from '@/store/useRootStore'

export const TablesViewTrigger = () => {
    const tablesView = useAppSelector(selectTablesView)
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(updateField({ field: 'tablesView', value: !tablesView }))
    }

    return (
        <Tippy content='Tables view' interactive={true} className=''>
            <div className='flex items-center cursor-default gap-2'>
                <StyledButton
                    variant={tablesView ? 'contained' : 'outlined'}
                    startIcon={<IconTableView className='w-5 h-5' />}
                    onClick={onClick}
                ></StyledButton>
            </div>
        </Tippy>
    )
}
