import { IconInfiniteLoading } from '@/assets/icons'
import { XAutocomplete } from '@/components-x/x-autocomplete/XAutocomplete'
import { FormLabel } from '@/components/form/FormLabel'
import { useFetchNotesLabels } from '@/modules/notes/components/notes-cms/components/notes-header/components/note-label/notes-labels-dialog/service/useFetchNotesLabels'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { useFormikContext } from 'formik'
import { capitalize } from 'lodash-es'
import { useEffect } from 'react'
import { SelectLabelsByRating } from './SelectLabelsByRating'
import { cn } from '@/helpers/cn'

export const NoteLabelSelect: React.FC = () => {
    const { isLoading, data, onChange, filter, notesLabels } = useFetchNotesLabels()
    const formikContext = useFormikContext<INoteSchema>()

    useEffect(() => {
        onChange(formikContext.values.label?.name || '')
    }, [formikContext.values.label?.name])

    const handleSelect = (value: string) => {
        const label = notesLabels.find((d) => d.id === value)?.name || ''
        onChange(label)
        formikContext.setFieldValue('label_id', value || null)
    }

    const handleClear = () => {
        onChange('')
        formikContext.setFieldValue('label_id', null)
    }

    return (
        <div className='w-full flex flex-col'>
            <FormLabel title='Label:' />
            <XAutocomplete
                suffixIcon={
                    isLoading && (
                        <div className='w-5 h-5 '>
                            <IconInfiniteLoading className='text-blue-500' />
                        </div>
                    )
                }
                disabled={isLoading}
                filterOption={false}
                allowClear
                className='x-autocomplete'
                style={{ height: 40 }}
                options={data.map((d) => ({ label: d.name, value: d.name, id: d.id }))}
                searchValue={filter}
                onSearch={(e) => onChange(e)}
                value={capitalize(filter)}
                onSelect={(_value, option) => {
                    handleSelect(option['id'])
                }}
                onBlur={() => {
                    formikContext.values.label_id
                        ? onChange(notesLabels.find((d) => d.id === formikContext.values.label_id)?.name || '')
                        : onChange('')
                }}
                onClear={handleClear}
                optionRender={(opt) => {
                    return (
                        <div
                            className={cn(
                                'h-10 text-base flex items-center capitalize',
                                opt.data['id'] === formikContext.values.label_id && '!text-blue-500',
                            )}
                        >
                            {opt.value}
                        </div>
                    )
                }}
            />
            <SelectLabelsByRating handleSelect={handleSelect} />
        </div>
    )
}
