import { Form } from 'antd'
import { useSprintsStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { NewSprintTitle } from './components/NewSprintTitle'
import { NewSprintDescription } from './components/NewSprintDescription'
import { NewSprintImageIndex } from './components/NewSprintImageIndex'
import { NewSprintGoalIndex } from './components/NewSprintGoalIndex'
import { NewSprintAchievementIndex } from './components/NewSprintAchievementIndex'
import { NewSprintDurationIndex } from './components/NewSprintDurationIndex'
import { NewSprintRushButton } from './components/NewSprintRushButton'
import { NewSprintStartDateIndex } from './components/NewSprintStartDateIndex'
import { XLoader } from '@/components-x/x-loader/XLoader'

export const NewSprintDialog: React.FC = observer(() => {
    const { onChangeField, new_sprint } = useSprintsStore()

    const onCancel = () => onChangeField('new_sprint', undefined)

    return (
        <XModal title={new_sprint?.edit_mode ? 'Edit Sprint' : 'Create Sprint'} open={!!new_sprint} onCancel={onCancel}>
            {new_sprint?.loading ? (
                <XLoader />
            ) : (
                <div className='animate-opacity-5 text-black'>
                    {/* New Sprint Image */}
                    <NewSprintImageIndex />
                    {/*  */}
                    <Form className='py-5'>
                        {/*  */}
                        <NewSprintTitle />
                        {/*  */}
                        <NewSprintDescription />
                        {/*  */}
                        <NewSprintGoalIndex />
                        {/*  */}
                        <NewSprintAchievementIndex />
                        {/*  */}
                        <NewSprintDurationIndex />
                        {/*  */}
                        <NewSprintStartDateIndex />
                        {/*  */}
                        <NewSprintRushButton />
                    </Form>
                </div>
            )}
        </XModal>
    )
})
