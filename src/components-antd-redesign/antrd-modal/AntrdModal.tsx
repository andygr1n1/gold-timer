import { Modal, ModalProps } from 'antd'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components/macro'

const ModalTemplate: React.FC<ModalProps> = observer((props) => {
    return <Modal {...props}>{props.children}</Modal>
})

export const RdModal = styled(ModalTemplate)`
    .ant-modal-content {
        border-radius: 10px;
        /* height: 80vh; */
        overflow: auto;
    }

    .ant-modal-body {
        display: flex;
        flex-direction: column;
        /* height: calc(100% - 100px); */
    }

    .ant-modal-header {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background: transparent;
        /* height: 65px; */
    }

    .ant-modal-close-x {
        width: auto;
        line-height: auto;
        height: auto;
    }

    .ant-modal-title {
        font-weight: bold;
        font-family: 'Tilt Neon', cursive;
        /* font-family: 'Sofia Sans', Courier, monospace; */
        font-size: 20px;
    }
`
