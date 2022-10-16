import { Input, InputProps } from 'antd'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

const StyledInput = styled(Input)`
    padding: 8px 4px;
    font-size: 16px;

    &:disabled {
        border: 1px solid transparent;
        cursor: default;
        color: #475569; //slate-600
    }
`

export const RdInput: React.FC<InputProps> = observer((props) => {
    return <StyledInput {...props}>{props.children}</StyledInput>
})
