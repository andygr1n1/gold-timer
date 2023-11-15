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
                width={25}
                height={20}
                className='text-cText cursor-pointer  opacity-70 duration-300  hover:text-blue-500 hover:opacity-100'
            />
        </a>
    )
})
