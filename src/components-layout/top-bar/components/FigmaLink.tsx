import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const FigmaLink: React.FC = observer(() => {
    return (
        <a
            href='https://www.figma.com/file/Y52GynpyJysdgC2dNGjAqm/Kzen-Secret?type=design&t=SgopD50J3N335tyn-0'
            target='_blank'
            className='flex items-center justify-center'
        >
            <Icon
                icon='devicon:figma'
                width={22}
                height={23}
                className='cursor-pointer text-navLink  duration-300 hover:text-blue-500'
            />
        </a>
    )
})
