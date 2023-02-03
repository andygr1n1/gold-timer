import { RdButton } from '@/components-antd-redesign/antrd-button/RdButton'
import { IGoal$ } from '@/mst/types'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const FreezedGoal: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { created_at, createdDaysAgo, title, slogan, description, goActivateFreezedGoal, goEditFrozenGoal } = goal

    return (
        <div className='border-l-solid flex min-w-[300px] flex-col gap-5 rounded-md border-l-[4px] border-l-blue-400 bg-blue-50 p-5 shadow-xl'>
            <div className='flex h-full flex-col'>
                <div>
                    {created_at && (
                        <div className='flex items-center gap-4 font-mono text-xs text-slate-500'>
                            <span>{format(created_at, 'MM.dd.yyyy')}</span>
                            <span>{format(created_at, 'HH:mm')}</span>
                        </div>
                    )}
                    {
                        <div className='flex h-5 items-center gap-4 font-monoIitalic text-xs text-slate-500'>
                            {!!createdDaysAgo && `${createdDaysAgo} days ago`}
                        </div>
                    }
                </div>

                <h3 className='font-bold'>{title}</h3>
                <div>{slogan}</div>
                <div>{description}</div>
            </div>
            <div className='flex flex-auto justify-between'>
                <RdButton onClick={goActivateFreezedGoal}>Activate</RdButton>
                <RdButton onClick={goEditFrozenGoal}>Edit</RdButton>
            </div>
        </div>
    )
})
