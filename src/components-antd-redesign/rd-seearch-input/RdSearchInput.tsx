import Input from 'antd/es/input/Input'
import { InputProps } from 'antd/lib/input/Input'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

const StyledSearch = styled(Input)`
    margin: 10px;
    padding: 5px;
    padding-left: 15px;
    border-radius: 20px;
    background-color: var(--colors-global-3-bg);
    border: none;

    &:focus,
    &.ant-input-affix-wrapper-focused {
        border: none;
        box-shadow: 0 0 0 0 rgb(5 145 255 / 10%);
        border-inline-end-width: 0px;
    }

    input {
        font-family: 'Cascadia Code', Courier, monospace;
        font-size: 10px !important;
        background-color: var(--colors-global-3-bg);
        color: white;

        &::placeholder {
            color: var(--colors-gray-300);
        }
    }
`

export const RdSearchInput: React.FC<InputProps> = observer((props) => {
    return <StyledSearch {...props}>{props.children}</StyledSearch>
})
