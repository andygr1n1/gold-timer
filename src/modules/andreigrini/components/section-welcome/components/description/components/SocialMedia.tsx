import { IconGithubStar, IconLeetCode, IconLinkedIn, IconMail, IconTelegram, IconX } from '@/assets/icons'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { observer } from 'mobx-react-lite'

export const SocialMedia: React.FC = observer(() => {
    return (
        <div className='absolute bottom-[-60px] left-[-5px] flex gap-4 items-center justify-center lg:justify-start right-0 w-full'>
            <a
                id='linkedin'
                className='cursor-pointer hover:animate-pulse'
                href={'https://www.linkedin.com/in/andrew-grini/'}
                target='_blank'
            >
                <IconLinkedIn width={40} height={40} />
            </a>
            <XTooltip anchorSelect='#linkedin'>Linked In</XTooltip>
            {/*  */}
            <a
                id='leet-code'
                className='cursor-pointer hover:animate-pulse'
                href={'https://leetcode.com/u/andygr1n1/'}
                target='_blank'
            >
                <IconLeetCode width={30} height={30} />
            </a>
            <XTooltip anchorSelect='#leet-code'>Leet code</XTooltip>
            {/*  */}
            <a
                id='git-h'
                className='cursor-pointer hover:animate-pulse'
                href={'https://leetcode.com/u/andygr1n1/'}
                target='_blank'
            >
                <IconGithubStar width={38} height={38} />
            </a>
            <XTooltip anchorSelect='#git-h'>Git hub</XTooltip>
            {/*  */}
            <a
                id='x-mask'
                className='cursor-pointer hover:animate-pulse'
                href='https://twitter.com/andygrini'
                target='_blank'
            >
                <IconX width={36} height={36} />
            </a>
            <XTooltip anchorSelect='#x-mask'>X</XTooltip>
            {/*  */}
            <a
                id='telegram'
                className='cursor-pointer hover:animate-pulse'
                href='https://telegram.me/andygr1n1'
                target='_blank'
            >
                <IconTelegram width={35} height={35} />
            </a>
            <XTooltip anchorSelect='#telegram'>Telegram</XTooltip>
            {/*  */}
            <a
                id='email'
                className='cursor-pointer hover:animate-pulse'
                href={'mailto:andy.grini@gmail.com'}
                target='_blank'
            >
                <IconMail width={36} height={36} />
            </a>
            <XTooltip anchorSelect='#email'>email</XTooltip>
        </div>
    )
})
