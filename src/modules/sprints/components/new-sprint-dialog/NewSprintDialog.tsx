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
import { NewSprintFooter } from './components/NewSprintFooter'
import { NewSprintStartDateIndex } from './components/NewSprintStartDateIndex'
import { XLoader } from '@/components-x/x-loader/XLoader'

export const NewSprintDialog: React.FC = observer(() => {
    const { onChangeField, new_sprint } = useSprintsStore()

    const onCancel = () => onChangeField('new_sprint', undefined)

    console.warn('newsprint ID - ', new_sprint?.id)

    return (
        <XModal title={new_sprint?.edit_mode ? 'Edit Sprint' : 'Create Sprint'} open={!!new_sprint} onCancel={onCancel}>
            {new_sprint?.loading ? (
                <XLoader />
            ) : (
                <div className='animate-opacity-5'>
                    {/* New Sprint Image */}
                    <NewSprintImageIndex />
                    {/*  */}
                    <Form className='py-5'>
                        {/*  */}
                        <div className='text-cText font-droid-bold mb-1 text-xs'>Title:</div>
                        <NewSprintTitle />
                        {/*  */}
                        <div className='text-cText font-droid-bold mb-1 text-xs'>Description:</div>
                        <NewSprintDescription />
                        {/*  */}
                        <div className='text-cText font-droid-bold mb-1 text-xs'>Sprint Goals:</div>
                        <NewSprintGoalIndex />
                        {/*  */}
                        <NewSprintAchievementIndex />
                        {/*  */}
                        <NewSprintDurationIndex />
                        {/*  */}
                        <NewSprintStartDateIndex />
                        {/*  */}
                        <NewSprintFooter />
                    </Form>
                </div>
            )}
        </XModal>
    )
})
