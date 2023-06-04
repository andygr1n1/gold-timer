import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const GithubLink: React.FC = observer(() => {
    return (
        <a href='https://github.com/users/andygr1n1/projects/2' target='_blank'>
            <Icon
                icon='ps:github-alt'
                width={25}
                height={25}
                className='cursor-pointer text-navLink  duration-300 hover:text-blue-500'
            />
        </a>
    )
})
