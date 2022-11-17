import { Button, ButtonProps } from 'antd'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

interface ButtonTemplateProps extends ButtonProps {
    animation?: 'true' | undefined
}

export const ButtonTemplate: React.FC<ButtonTemplateProps> = observer((props) => {
    return props.animation ? (
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
        border: 1px solid var(--green600);
        background: #22c55e;
        border-radius: 5px;
        color: white;

        &:hover {
            border: 1px solid var(--green600);
            border-radius: 5px;
            background: var(--green600);
            color: white;
        }
    }

    &.ant-btn-ghost.greenbutton {
        border: 1px solid var(--green600);
        border-radius: 5px;
        color: var(--green600);

        &:hover {
            border: 1px solid var(--green600);
            border-radius: 5px;
            background: var(--green600);
            color: white;
        }
    }

    /* goldbutton */
    &.ant-btn-primary.goldbutton {
        border: 1px solid var(--amber500);
        background: var(--amber400);
        border-radius: 5px;
        color: white;

        &:hover {
            border: 1px solid var(--amber400);
            border-radius: 5px;
            background: var(--amber400);
            color: white;
        }
    }

    &.ant-btn-ghost.goldbutton {
        border: 1px solid var(--amber400);
        border-radius: 5px;
        color: var(--amber500);

        &:hover {
            border: 1px solid var(--amber400);
            border-radius: 5px;
            background: var(--amber400);
            color: white;
        }
    }

    /* indigobutton */
    &.ant-btn-primary.indigobutton {
        border: 1px solid var(--indigo600);
        background: var(--indigo500);
        border-radius: 5px;
        color: white;

        &:hover {
            border: 1px solid var(--indigo600);
            border-radius: 5px;
            background: var(--indigo600);
            color: white;
        }
    }

    &.ant-btn-ghost.indigobutton {
        border: 1px solid var(--indigo600);
        border-radius: 5px;
        color: var(--amber500);

        &:hover {
            border: 1px solid var(--indigo600);
            border-radius: 5px;
            background: var(--indigo600);
            color: white;
        }
    }
`
