import { IGoal$ } from '@/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { PanelSettingsTooltip } from './PanelSettingsTooltip'

export const PanelSettings: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { is_favorite, favoriteGoal } = goal

    return (
        <div className='flex flex-col items-center justify-center  gap-2'>
            <PanelSettingsTooltip goal={goal} />
            {is_favorite ? (
                <button title='Unfavorite' className='flex w-full items-center justify-center '>
                    <Icon
                        icon='ic:outline-favorite'
                        className='cursor-pointer text-red-700 transition-colors duration-300 hover:text-red-600'
                        onClick={(event) => {
                            event.stopPropagation()
                            favoriteGoal()
                        }}
                    />
                </button>
            ) : (
                <button title='Favorite' className='flex w-full items-center justify-center '>
                    <Icon
                        icon='ic:baseline-favorite-border'
                        className='cursor-pointer transition-colors duration-300 hover:text-red-600'
                        onClick={(event) => {
                            event.stopPropagation()
                            favoriteGoal()
                        }}
                    />
                </button>
            )}
        </div>
    )
})
