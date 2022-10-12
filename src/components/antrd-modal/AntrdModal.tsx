import { Modal, ModalProps } from 'antd'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

const ModalTemplate: React.FC<ModalProps> = observer((props) => {
    return <Modal {...props}>{props.children}</Modal>
})

export const RdModal = styled(ModalTemplate)`
    color: red;
`
