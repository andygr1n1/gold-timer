import Input from 'antd/es/input/Input'
import { InputProps } from 'antd/lib/input/Input'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

const StyledSearch = styled(Input)`
    padding: 20px;
    border-radius: 20px;
    border: 2px solid var(--skyblue);
    box-shadow: 2px 2px 0 2px rgb(24 144 255 / 20%);

    &:hover {
        border: 2px solid var(--skyblue);
    }

    &:focus,
    &.ant-input-affix-wrapper-focused {
        border: 2px solid var(--skyblue);
        box-shadow: 3px 3px 3px 3px rgb(24 144 255 / 20%);
    }

    &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
        border-color: #40a9ff;
        border-right-width: 2px;
        z-index: 1;
    }

    input {
        color: var(--skyblue-600);
        font-style: italic;
        font-family: 'Cascadia Code', Courier, monospace;
        font-weight: bold;
    }

    &:disabled {
        border: 1px solid transparent;
        cursor: default;
        color: #475569; //slate-600
    }
`

export const RdSearchInput: React.FC<InputProps> = observer((props) => {
    return <StyledSearch {...props}>{props.children}</StyledSearch>
})
