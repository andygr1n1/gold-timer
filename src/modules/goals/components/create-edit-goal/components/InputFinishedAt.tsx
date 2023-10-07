import { XDayTimeSelector } from '@/components-x/x-date-picker/XDayTimeSelector'
import { useGoalsStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputFinishedAt: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { finished_at, onChangeField, view_mode } = new_goal

    function disabledDate(current: Date) {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now()
    }

    return (
        <>
            <div>
                <h5>Estimation: </h5>
                {view_mode ? (
                    <Input size='large' disabled value={finished_at?.toDateString()} />
                ) : (
                    <div className='flex flex-col gap-5 2xl:flex-row'>
                        <XDayTimeSelector
                            onChange={(e) => onChangeField('finished_at', e || undefined)}
                            disabledDate={disabledDate}
                            value={finished_at}
                        />
                    </div>
                )}
            </div>
        </>
    )
})
