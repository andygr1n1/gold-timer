import Input from 'antd/es/input/Input'
import { InputProps } from 'antd/lib/input/Input'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

const StyledSearch = styled(Input)`
    padding: 5px;
    padding-left: 15px;
    border-radius: 8px;
    background-color: var(--colors-button-bg);
    border: none;

    &:focus,
    &.ant-input-affix-wrapper-focused {
        border: none;
        box-shadow: 0 0 0 0 rgb(5 145 255 / 10%);
        border-inline-end-width: 0px;
        background-color: var(--colors-button-bg-focus);
    }

    input {
        font-family: 'Cascadia Code', Courier, monospace;
        font-size: 14px !important;
        background-color: var(--colors-button-bg);
        color: white;
        font-weight: 600;

        &::placeholder {
            color: white;
        }

        &:focus {
            background-color: var(--colors-button-bg-focus);
        }
    }
`

export const RdSearchInput: React.FC<InputProps> = observer((props) => {
    return <StyledSearch {...props}>{props.children}</StyledSearch>
})
