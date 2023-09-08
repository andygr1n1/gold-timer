import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const GithubLink: React.FC = observer(() => {
    return (
        <a
            href='https://github.com/users/andygr1n1/projects/2'
            target='_blank'
            className='flex items-center justify-center'
        >
            <Icon
                icon='ps:github-alt'
                width={20}
                height={20}
                className='text-navLink cursor-pointer  duration-300 hover:text-blue-500'
            />
        </a>
    )
})
