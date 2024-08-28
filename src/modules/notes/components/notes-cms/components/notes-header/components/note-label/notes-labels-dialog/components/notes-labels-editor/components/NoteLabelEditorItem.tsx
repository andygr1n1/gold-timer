import { type ICreateLabelForm } from '../../../service/types'
import { useRef, useState } from 'react'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { NLIDropdownRender } from './NLIDropdownRender'
import { IconDropdown } from 'react-day-picker'
import { observer } from 'mobx-react-lite'
import { useLabelDialog$ } from '../../../mst/provider'
import { Input, type InputRef } from 'antd'
import { cn } from '@/helpers/cn'
import { useUpdateNoteLabel } from './useUpdateNoteLabel'
import { IconEnterButton } from '@/assets/icons/IconEnterButton'

export const NoteLabelEditorItem: React.FC<{ label: ICreateLabelForm }> = observer(({ label }) => {
    const { selectedLabel, onChangeField } = useLabelDialog$()
    const { updateNoteLabel } = useUpdateNoteLabel()
    const [value, setValue] = useState(label.name)
    const inputRef = useRef<InputRef | null>(null)

    const readonly = selectedLabel !== label.id

    return (
        <div
            className='h-10 flex w-full items-center border-b-[1px] py-2 border-b-solid border-gray-200/50'
            key={label.id}
        >
            <div className='flex flex-auto mx-2'>
                <Input
                    suffix={!readonly && <IconEnterButton className='opacity-80' />}
                    autoFocus
                    ref={inputRef}
                    size='large'
                    value={value}
                    onBlur={() => {
                        updateNoteLabel({ id: label.id, name: value })
                        onChangeField('selectedLabel', null)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            inputRef.current?.blur()
                        }
                    }}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={selectedLabel !== label.id}
                    className={cn(readonly && '!bg-transparent !border-transparent')}
                />
            </div>
            <div className='w-14 gap-2 flex items-center justify-center'>
                <XDropdown
                    trigger={['hover']}
                    dropdownRender={() => <NLIDropdownRender label={label} inputEl={inputRef?.current} />}
                    placement='bottom'
                    overlayClassName='!z-[9000]'
                >
                    <StyledButton variant='text'>
                        <IconDropdown className='min-w-3 min-h-3 cursor-pointer' />
                    </StyledButton>
                </XDropdown>
            </div>
        </div>
    )
})
