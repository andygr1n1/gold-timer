import { Button, ButtonProps } from 'antd'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'

export const RdButton: React.FC<ButtonProps> = observer((props) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className='border-none bg-transparent'>
            <Button {...props}>{props.children}</Button>
        </motion.div>
    )
})
