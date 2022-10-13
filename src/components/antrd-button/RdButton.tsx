import { Button, ButtonProps } from 'antd'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

export const ButtonTemplate: React.FC<ButtonProps> = observer((props) => {
    return (
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1 }}>
            <Button {...props}>{props.children}</Button>
        </motion.div>
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
`
