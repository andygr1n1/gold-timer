import { observer } from 'mobx-react-lite'
import { ButtonSaveTask } from './components/ButtonSaveTask'
import { DescriptionTextArea } from './components/DescriptionTextArea'
import { TagInput } from './components/TagInput'

export const CreateNewTaskWidget: React.FC = observer(() => {
    return (
        <div className='my-5 hidden h-[330px] w-full max-w-[260px] flex-col justify-end gap-5 rounded-md bg-global-bg p-5 2xl:flex'>
            <DescriptionTextArea />
            <TagInput />
            <ButtonSaveTask />
        </div>
    )
})
