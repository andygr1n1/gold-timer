import { Button, ButtonProps } from 'antd'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

interface ButtonTemplateProps extends ButtonProps {
    animate?: boolean
}

export const ButtonTemplate: React.FC<ButtonTemplateProps> = observer((props) => {
    return props.animate ? (
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1 }}>
            <Button {...props}>{props.children}</Button>
        </motion.div>
    ) : (
        <Button {...props}>{props.children}</Button>
    )
})

export const RdButton = styled(ButtonTemplate)`
    border: 1px solid var(--spaceblue);
    border-radius: 5px;
    color: var(--spaceblue);

    &:hover {
        border: 1px solid var(--spaceblue);
        border-radius: 5px;
        background: var(--spaceblue);
        color: white;
    }

    &.ant-btn-primary.redbutton {
        border: 1px solid #b91c1c;
        background: #ef4444;
        border-radius: 5px;
        color: white;

        &:hover {
            border: 1px solid #b91c1c;
            border-radius: 5px;
            background: #b91c1c;
            color: white;
        }
    }

    &.ant-btn-ghost.redbutton {
        border: 1px solid #b91c1c;
        border-radius: 5px;
        color: #b91c1c;

        &:hover {
            border: 1px solid #b91c1c;
            border-radius: 5px;
            background: #b91c1c;
            color: white;
        }
    }

    &.ant-btn-default.graybutton {
        border: 1px solid #71717a;
        border-radius: 5px;
        color: #71717a;

        &:hover {
            border: 1px solid #71717a;
            border-radius: 5px;
            background: #71717a;
            color: white;
        }
    }

    &.ant-btn-primary.greenbutton {
        border: 1px solid #16a34a;
        background: #22c55e;
        border-radius: 5px;
        color: white;

        &:hover {
            border: 1px solid #16a34a;
            border-radius: 5px;
            background: #16a34a;
            color: white;
        }
    }

    &.ant-btn-ghost.greenbutton {
        border: 1px solid #16a34a;
        border-radius: 5px;
        color: #16a34a;

        &:hover {
            border: 1px solid #16a34a;
            border-radius: 5px;
            background: #16a34a;
            color: white;
        }
    }
`
