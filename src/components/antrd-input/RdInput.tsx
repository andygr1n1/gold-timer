import { Input, InputProps } from 'antd'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

export const InputTemplate: React.FC<InputProps> = observer((props) => {
    return <Input {...props}>{props.children}</Input>
})

export const RdInput = styled(InputTemplate)`
    padding: 4px;
    font-size: 16px;

    &:disabled {
        border: none;
        cursor: default;
        color: #475569; //slate-600
    }
`
