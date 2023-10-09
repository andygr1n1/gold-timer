import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'
import generatePicker from 'antd/es/date-picker/generatePicker'
import 'antd/es/date-picker/style/index'
import { format } from 'date-fns'
import { ChangeEventHandler, useState } from 'react'
import { XCalendar } from './XCalendar'
import { XInput } from '../x-input/XInput'
import { Icon } from '@iconify/react'
import { XModal } from '../x-modal/XModal'
import { FormFooter } from '@/components/form/FormFooter'
import { type DayPicker, type DayPickerSingleProps } from 'react-day-picker'

export const XDatePickerAntd = generatePicker<Date>(dateFnsGenerateConfig)
export type CalendarProps = React.ComponentProps<typeof DayPicker>
export type XDatePickerProps = {
    dateFormat?: string
    className?: string
    inputClassName?: string
    inputDisabled?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    label?: string
    placeholder?: string
    onClear?: () => void
    showToday?: boolean
    readOnly?: boolean
} & DayPickerSingleProps

export const XDatePicker: React.FC<XDatePickerProps> = ({
    placeholder = '',
    dateFormat,
    inputClassName,
    inputDisabled,
    readOnly,
    ...props
}) => {
    const [dateSelectorIsOpen, setDateSelectorIsOpen] = useState(false)
    const closeDateSelector = () => setDateSelectorIsOpen(false)
    const openDateSelector = () => {
        setDateSelectorIsOpen(true)
    }

    const [bufferSelect, setBufferSelect] = useState(props.selected)

    const getValue = (options: { date?: Date; dateFormat?: string }) => {
        const { date, dateFormat } = options
        return date ? format(date, dateFormat || 'dd.MM.yyyy') : null
    }

    return (
        <>
            <div onClick={() => !readOnly && openDateSelector()}>
                <XInput
                    value={getValue({ date: props.selected, dateFormat }) || ''}
                    disabled={inputDisabled}
                    endIcon={<Icon icon='mdi:calendar' className='cursor-pointer' />}
                    className={inputClassName}
                    onChange={() => undefined}
                    label={props.label}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    variant='select'
                />
            </div>

            <XModal title={'Select Date'} height='80vh' open={dateSelectorIsOpen} onCancel={closeDateSelector}>
                {dateSelectorIsOpen ? (
                    <div className='animate-opacity-3 flex h-full min-h-[500px] flex-col py-5'>
                        <div className='flex h-full flex-col items-center '>
                            <XCalendar {...props} bufferSelect={bufferSelect} setBufferSelect={setBufferSelect} />
                        </div>
                        {/* Footer */}
                        <FormFooter
                            okTitle={'Save'}
                            onOk={(e) => {
                                props?.onSelect?.(bufferSelect, new Date(Date.now()), {}, e)
                                closeDateSelector()
                            }}
                            onCancel={closeDateSelector}
                        />
                    </div>
                ) : null}
            </XModal>
        </>
    )
}
