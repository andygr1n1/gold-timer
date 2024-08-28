import { AutoComplete, type AutoCompleteProps } from 'antd'
import './XAutocomplete.scss'
export const XAutocomplete: React.FC<AutoCompleteProps> = (props) => {
    return (
        <AutoComplete
            {...props}
            rootClassName='x-autocomplete-root'
            popupClassName='x-autocomplete-popup-root'
            className='x-autocomplete'
            style={{ height: 40 }}
            filterOption={(inputValue, option) =>
                option?.value?.toString()?.toUpperCase()?.indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    )
}
