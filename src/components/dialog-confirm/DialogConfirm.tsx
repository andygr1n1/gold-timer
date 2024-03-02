import { XModal } from '@/components-x/x-modal/XModal'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

export const DialogConfirm: React.FC<{ title: ReactNode; open: boolean; onCancel: () => void; onOk: () => void }> =
    observer(({ title, open, onCancel, onOk }) => {
        return (
            <XModal open={open} onCancel={onCancel}>
                <div className='relative flex h-full flex-col items-center justify-center gap-5 px-10 pt-10'>
                    {title}
                    <div className='m-5 flex items-center justify-center gap-5'>
                        <Button onClick={onCancel}>Cancel</Button>
                        <Button onClick={onOk} type='primary'>
                            Ok
                        </Button>
                    </div>
                </div>
            </XModal>
        )
    })
