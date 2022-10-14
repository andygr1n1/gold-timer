import { TextAreaProps } from 'antd/lib/input'
import TextArea from 'antd/lib/input/TextArea'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

export const RdTextArea: React.FC<TextAreaProps> = observer((props) => {
    const StyledTextArea = styled(TextArea)`
        padding: 8px 4px;
        font-size: 16px;

        &:disabled {
            border: none;
            cursor: default;
            color: #475569; //slate-600
        }
    `

    return <StyledTextArea {...props}>{props.children}</StyledTextArea>
})
