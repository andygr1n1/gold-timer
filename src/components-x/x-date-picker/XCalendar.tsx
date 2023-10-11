import { Icon } from '@iconify/react'
import { DayPicker, useNavigation } from 'react-day-picker'
import { XDatePickerProps } from './XDatePicker'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XTooltip } from '../x-tooltip/XTooltip'
import clsx from 'clsx'
import styles from './XCalendar.module.scss'
// possible to redesign dropdown with  useNavigation  from 'react-day-picker'

type IXCalendarProps = {
    bufferSelect: Date | undefined
    setBufferSelect: Dispatch<SetStateAction<Date | undefined>>
} & XDatePickerProps
export const XCalendar: React.FC<IXCalendarProps> = (props) => {
    function onSelect(day: Date | undefined) {
        props.setBufferSelect(day)
    }

    return (
        <div>
            <DayPicker
                {...props}
                classNames={{
                    caption_label: 'mr-2',
                    day: clsx('h-9 w-9 p-0 font-normal rounded-md', styles['x-calendar-day']),
                    day_today: 'text-red-500',
                }}
                components={{
                    IconLeft: () => <Icon icon='akar-icons:chevron-left' />,
                    IconRight: () => <Icon icon='akar-icons:chevron-right' />,
                }}
                onSelect={onSelect}
                selected={props.bufferSelect}
                footer={<DayPickerFooter {...props} />}
            />
        </div>
    )
}

const DayPickerFooter: React.FC<IXCalendarProps> = (props) => {
    const { goToMonth } = useNavigation()
    function onSelect(day: Date | undefined) {
        props.setBufferSelect(day)
    }

    useEffect(() => {
        if (props.selected) {
            goToMonth(props.selected)
            onSelect(props.selected)
        }
    }, [])

    return (
        <div className='flex items-center justify-start gap-2'>
            <StyledButton
                id='resetDate'
                variant='text'
                className='z-10'
                startIcon={
                    <Icon
                        onClick={() => onSelect(undefined)}
                        icon='bx:reset'
                        width={24}
                        height={24}
                        className='hover:text-xBlue-1 cursor-pointer p-2 duration-300'
                    />
                }
            ></StyledButton>
            <XTooltip anchorSelect='#resetDate'>Reset</XTooltip>

            {props.showToday && (
                <StyledButton
                    id='showToday'
                    variant='text'
                    onClick={() => {
                        onSelect(new Date(Date.now()))
                        goToMonth(new Date(Date.now()))
                    }}
                >
                    Today
                </StyledButton>
            )}
            <XTooltip anchorSelect='#showToday'>Navigate to current date</XTooltip>
        </div>
    )
}
