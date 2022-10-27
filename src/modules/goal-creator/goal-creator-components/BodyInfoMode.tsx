import { InputCreatedAt } from './body-inputs/InputCreatedAt'
import { InputDifficulty } from './body-inputs/InputDifficulty'
import { InputFinishedAt } from './body-inputs/InputFinishedAt'
import { SelectPrivacy } from './body-inputs/SelectPrivacy'
import { InputRound } from './body-inputs/InputRound'
import { InputSlogan } from './body-inputs/InputSlogan'
import { SelectStatus } from './body-inputs/SelectStatus'
import { InputTitle } from './body-inputs/InputTitle'
import { TextAreaDescription } from './body-inputs/TextAreaDescription'

export const BodyInfoMode: React.FC = () => {
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
            <div className='flex  flex-[33%] flex-col'>
                <InputDifficulty />

                <InputRound />

                <InputCreatedAt />

                <InputFinishedAt />
            </div>
        </div>
    )
}
