import { Input, InputProps } from 'antd'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

export const RdInput: React.FC<InputProps> = observer((props) => {
    const StyledInput = styled(Input)`
        padding: 8px 4px;
        font-size: 16px;

        &:disabled {
            border: none;
            cursor: default;
            color: #475569; //slate-600
        }
    `

    return <StyledInput {...props}>{props.children}</StyledInput>
})
