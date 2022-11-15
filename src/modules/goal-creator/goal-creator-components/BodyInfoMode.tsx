import { InputCreatedAt } from './body-inputs/InputCreatedAt'
import { InputDifficulty } from './body-inputs/InputDifficulty'
import { InputFinishedAt } from './body-inputs/InputFinishedAt'
import { SelectPrivacy } from './body-inputs/SelectPrivacy'
import { InputSlogan } from './body-inputs/InputSlogan'
import { SelectStatus } from './body-inputs/SelectStatus'
import { InputTitle } from './body-inputs/InputTitle'
import { TextAreaDescription } from './body-inputs/TextAreaDescription'
import { observer } from 'mobx-react-lite'
import { useGoalsStore } from '@/StoreProvider'
import { SelectRitualType } from './body-inputs/SelectRitualType'
import { InputRitualInterval } from './body-inputs/InputRitualInterval'

export const BodyInfoMode: React.FC = observer(() => {
    const { editable_goal } = useGoalsStore()

    const ritualizedMode = !!editable_goal?.goal_ritualized_mode

    return (
        <div className='relative flex h-full w-full gap-5 overflow-auto'>
            <div className='flex  flex-[33%] flex-col'>
                <InputTitle />

                <InputSlogan />

                <TextAreaDescription />
            </div>
            <div className='flex  flex-[33%] flex-col'>
                <SelectStatus />

                <SelectPrivacy />
            </div>
            {!ritualizedMode && (
                <div className='flex  flex-[33%] flex-col'>
                    <InputDifficulty />

                    <InputCreatedAt />

                    <InputFinishedAt />
                </div>
            )}
            {ritualizedMode && (
                <div className='flex  flex-[33%] flex-col'>
                    <SelectRitualType />

                    <InputRitualInterval />
                </div>
            )}
        </div>
    )
})
