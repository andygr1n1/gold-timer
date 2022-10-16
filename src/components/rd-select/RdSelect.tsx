import { Listbox, Transition } from '@headlessui/react'
import { observer } from 'mobx-react-lite'
import { Fragment, Key } from 'react'
import styled from 'styled-components/macro'

const StyledSelect = styled.div`
    width: 100%;

    button {
        width: 100%;
        text-align: left;
        font-size: 16px;
        line-height: 1.5715;
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        transition: all 0.3s;
        padding: 8px 4px;
        cursor: pointer;

        &:hover {
            border: 1px solid #40a9ff;
        }

        &:active,
        &:active,
        &:target,
        &:focus {
            border: 1px solid #40a9ff;
            box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
            border-right-width: 1px;
            outline: 0px solid transparent;
            outline-offset: 0px;
        }

        &[aria-expanded='true'] {
            border: 1px solid #40a9ff;
            box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
            border-right-width: 1px;
            outline: 0px solid transparent;
            outline-offset: 0px;
        }

        &:disabled {
            background: #f5f5f5;
            border: 1px solid transparent;
            cursor: default;
            color: #475569; //slate-600
            user-select: text;
            &:hover {
                border-color: #d9d9d9;
            }

            &:active,
            &:active,
            &:target,
            &:focus {
                border: 1px solid #d9d9d9;
                box-shadow: 0 0 0 transparent;
                border-right-width: 1px;
                outline: 0px solid transparent;
                outline-offset: 0px;
            }
        }
    }

    &:disabled {
        border: 1px solid transparent;
        cursor: default;
        color: rgba(0, 0, 0, 0.25);
    }
`

interface IRdSelect<V, L> {
    value: V
    onSelect: (value: V) => void
    options: { value: V; label: L }[]
    disabled?: boolean
}

export const RdSelect = observer(<V extends Key, L extends unknown>(props: IRdSelect<V, L>) => {
    return (
        <StyledSelect>
            <Listbox
                as='div'
                className='relative flex w-full flex-auto flex-col'
                value={props.value}
                onChange={props.onSelect}
                disabled={props.disabled}
            >
                <Listbox.Button className={'flex w-full min-w-full flex-auto'}>{props.value}</Listbox.Button>
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options className='absolute top-12 z-50 flex w-full animate-opacity flex-col bg-gray-50  text-sm shadow-md transition-all duration-150'>
                        {props.options.map((option) => (
                            <Listbox.Option
                                key={option.value}
                                value={option.value}
                                className='border-b-solid flex h-full w-full cursor-pointer border-b border-b-gray-200'
                            >
                                {({ active, selected }) => (
                                    <span
                                        className={`flex h-10 w-full items-center px-2 transition-all duration-150  ${
                                            active && !selected ? 'bg-blue-50 text-spaceblue' : ' bg-transparent'
                                        } ${selected ? 'bg-blue-100 text-spaceblue' : ''}`}
                                    >
                                        {option.value}
                                    </span>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </StyledSelect>
    )
})
