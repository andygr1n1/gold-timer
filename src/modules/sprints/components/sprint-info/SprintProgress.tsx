import { Progress } from 'antd'
import { observer } from 'mobx-react-lite'

export const SprintProgress: React.FC<{ progress: number }> = observer(({ progress }) => {
    return (
        <Progress
            className='[&_*]:!text-cText flex h-full items-center justify-center'
            type='circle'
            size={'small'}
            percent={progress}
            strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
        />
    )
})
