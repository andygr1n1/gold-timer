import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { XInput } from '../x-input/XInput'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { useSelectDropdownClickOutside } from './useSelectDropdownClickOutside.hook'

type XSelectOption = {
    label: string
    value: string
}
type TXSelect = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> & {
    label?: string
    error?: boolean
    errorMessage?: string
    startIcon?: ReactNode
    endIcon?: ReactNode
    readOnly?: boolean
    options: XSelectOption[]
    onChange: (value: string) => void
}

export const XSelect: React.FC<TXSelect> = ({ value, options, readOnly, onChange }) => {
    const [open, setOpen] = useState(false)
    //
    const inputLabel = options.find((opt) => opt.value.toString() === value?.toString())?.label
    //
    const [inputClicked, setInputClicked] = useState(false)

    const onClick = () => {
        if (readOnly) return
        if (inputClicked) {
            setOpen(!inputClicked)
        } else {
            setOpen(true)
        }
        setInputClicked(false)
    }
    //

    return (
        <div className='relative'>
            <XInput
                variant='select'
                value={isNaN(Number(value)) ? '' : inputLabel}
                endIcon={<Icon icon='mi:select' className='x-select-icon cursor-pointer' onClick={onClick} />}
                onChange={() => undefined}
                onClick={onClick}
                readOnly={readOnly}
            />
            {open && (
                <SelectOptions
                    value={value}
                    options={options}
                    action={(value) => {
                        onChange(value)
                        setOpen(false)
                    }}
                    onClose={() => {
                        setOpen(false)
                    }}
                    inputAction={() => {
                        setOpen(false)
                        setInputClicked(true)
                    }}
                />
            )}
        </div>
    )
}

const SelectOptions: React.FC<{
    value?: string | number | readonly string[]
    options: XSelectOption[]
    action: (value: string) => void
    inputAction: () => void
    onClose: () => void
}> = ({ options, action, value, onClose, inputAction }) => {
    const childRef = useRef<null | HTMLDivElement>(null)
    useSelectDropdownClickOutside({
        childRef,
        childAction: () => onClose(),
        inputAction: () => inputAction(),
    })

    useLayoutEffect(() => {
        const element = childRef?.current
        const rect = childRef?.current?.getBoundingClientRect()
        const offsetHeight = childRef?.current?.offsetHeight
        if (!rect || !offsetHeight) return
        const rectTop = rect.y + window.scrollY
        const heightPosition = offsetHeight + rectTop + offsetHeight
        const windowHeight = window.screen.height

        if (heightPosition > windowHeight) {
            element?.classList.add('bottom-11')
        }
    }, [])
    return (
        <div
            ref={childRef}
            className={clsx(
                'bg-global-2-bg-plasma absolute z-30 w-full rounded-md px-[2px] shadow-xl shadow-black/30 backdrop-blur-md  transition-all',
            )}
        >
            {options.map((opt) => (
                <div
                    key={opt.value}
                    className={clsx(
                        'cursor-pointer px-1 py-2 text-lg transition-all hover:text-blue-500',
                        opt.value.toString() === value?.toString() && '!text-blue-500',
                    )}
                    onClick={() => {
                        action(opt.value)
                    }}
                >
                    {opt.label}
                </div>
            ))}
        </div>
    )
}
