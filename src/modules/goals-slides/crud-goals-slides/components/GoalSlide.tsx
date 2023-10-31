import { observer } from 'mobx-react-lite'
import { IGoalSlide$ } from '../../mst/types'
import { Menu, MenuItem } from '@szhsin/react-menu'
import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import clsx from 'clsx'

export const GoalSlide: React.FC<{ goalSlide: IGoalSlide$ }> = observer(({ goalSlide }) => {
    const { isDarkTheme } = useRootStore()

    const { active, toggleShow, deleteGoalSlide } = goalSlide

    return (
        <div className='relative'>
            <Menu
                theming={isDarkTheme ? 'dark' : undefined}
                menuButton={
                    <img
                        title={goalSlide.title}
                        className={clsx('h-[100px] w-[100px] cursor-pointer rounded-md', !active && 'opacity-30')}
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slides/${goalSlide.img_path}`}
                    />
                }
                transition
            >
                <MenuItem onClick={() => toggleShow()} className={'mx-1 flex items-center gap-2 px-1'}>
                    <Icon icon={active ? 'mdi:hide' : 'mdi:show'} width={24} height={24} />
                    <span className='text-lg'>{active ? 'Hide' : 'Show'}</span>
                </MenuItem>
                <MenuItem onClick={() => deleteGoalSlide()} className={'mx-1 flex items-center gap-2 px-1'}>
                    <Icon icon='fluent:delete-dismiss-24-filled' width={24} height={24} />
                    <span className='text-lg'>Delete</span>
                </MenuItem>
            </Menu>
        </div>
    )
})
