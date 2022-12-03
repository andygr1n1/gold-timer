import { TextAreaProps } from 'antd/lib/input'
import TextArea from 'antd/lib/input/TextArea'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

const StyledTextArea = styled(TextArea)`
    padding: 8px 4px;
    font-size: 16px;

    &:disabled {
        background: #f5f5f5;
        border: 1px solid transparent;
        cursor: default;
        color: #475569; //slate-600
        user-select: text;
        &:hover {
            border-color: #d9d9d9;
        }

        &:active,
        &:active,
        &:target,
        &:focus {
            border: 1px solid #d9d9d9;
            box-shadow: 0 0 0 transparent;
            border-right-width: 1px;
            outline: 0px solid transparent;
            outline-offset: 0px;
        }
    }
`

export const RdTextArea: React.FC<TextAreaProps> = observer((props) => {
    return <StyledTextArea {...props}>{props.children}</StyledTextArea>
})
