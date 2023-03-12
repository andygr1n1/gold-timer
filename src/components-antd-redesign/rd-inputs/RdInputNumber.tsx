import { InputNumber, InputNumberProps } from 'antd'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

const StyledInputNumber = styled(InputNumber)`
    padding: 4px;
    font-size: 16px;

    &:disabled {
        border: 1px solid transparent;
        cursor: default;
        color: #475569; //slate-600
    }
`

export const RdInputNumber: React.FC<InputNumberProps> = observer((props) => {
    return <StyledInputNumber {...props}>{props.children}</StyledInputNumber>
})
