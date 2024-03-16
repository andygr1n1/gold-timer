import { IconCompleted, IconDeleteTemp, IconExpired, IconFavorite, IconFocus, IconRitual } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'

export const GoalFilterIcons = ({}) => {
    return (
        <div className='relative my-10 flex w-fit mx-auto gap-5 flex-wrap items-center '>
            <StyledButton
                variant='text'
                className=''
                startIcon={<IconFocus width={70} height={70} className='min-h-[66px] min-w-[66px] text-blue-600' />}
            />
            <StyledButton
                variant='text'
                className=''
                startIcon={<IconExpired width={70} height={70} className='min-h-[65px] min-w-[65px] text-amber-600' />}
            />
            <StyledButton
                variant='text'
                className=''
                startIcon={<IconRitual width={75} height={75} className='min-h-[65px] min-w-[65px] text-teal-600' />}
            />
            <StyledButton
                variant='text'
                className=''
                startIcon={
                    <IconFavorite width={75} height={75} className='min-h-[70px] mb-2 min-w-[70px] text-rose-600' />
                }
            />
            <StyledButton
                variant='text'
                className=''
                startIcon={
                    <IconCompleted width={70} height={70} className='min-h-[70px] mb-=1 min-w-[70px] text-rose-600' />
                }
            />
            <StyledButton
                variant='text'
                className=''
                startIcon={
                    <IconDeleteTemp width={60} height={60} className='min-h-[70px] mt-2 min-w-[70px] text-rose-600' />
                }
            />
        </div>
    )
}
