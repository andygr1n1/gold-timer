import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'

export const SprintImg: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { title, img_path } = sprint
    return img_path ? (
        <div className='absolute -top-10 left-5 h-[100px] min-h-[100px] w-[100px] min-w-[100px] cursor-pointer rounded-md  opacity-100 shadow-xl shadow-black/50'>
            <img
                title={title}
                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/sprints/${img_path}`}
                width={100}
                height={100}
                className='rounded-md'
            />
        </div>
    ) : null
})
