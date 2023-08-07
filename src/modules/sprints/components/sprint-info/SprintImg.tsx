import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'

export const SprintImg: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { title, img_path, isStatusFreezed } = sprint
    return (
        <div className='relative h-[100px]'>
            {isStatusFreezed && <div className='absolute z-[20] h-full w-full bg-blue-500/40' />}
            <img
                title={title}
                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/sprints/${img_path ? img_path : 'sprint_logo.jpeg'}`}
                width={100}
                height={100}
                className='rounded-md 2xl:rounded-l-none'
            />
        </div>
    )
})
