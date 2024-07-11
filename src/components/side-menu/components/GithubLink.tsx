import { IconGithub } from '@/assets/icons/IconGithub'
import { observer } from 'mobx-react-lite'

export const GithubLink: React.FC = observer(() => {
    return (
        <a
            href='https://github.com/users/andygr1n1/projects/2'
            target='_blank'
            className='flex items-center justify-center'
        >
            <IconGithub
                width={25}
                height={25}
                className='text-cText cursor-pointer pt-[5px] opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'
            />
        </a>
    )
})
