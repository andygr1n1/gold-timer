import { Form } from 'antd'
import { useSprintsStore } from '@/modules/app/mst/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { NewSprintTitle } from './components/NewSprintTitle'
import { NewSprintDescription } from './components/NewSprintDescription'
import { NewSprintImageIndex } from './components/NewSprintImageIndex'
import { SprintGoals } from './components/SprintGoals'
import { NewSprintAchievementIndex } from './components/NewSprintAchievementIndex'
import { NewSprintDurationIndex } from './components/NewSprintDurationIndex'
import { NewSprintStartDateIndex } from './components/NewSprintStartDateIndex'
import { FormFooter } from '@/components/form/FormFooter'

export const CreateEditSprintDialog: React.FC = observer(() => {
    const { onChangeField, new_sprint } = useSprintsStore()

    const onCancel = () => onChangeField('new_sprint', undefined)

    return (
        <XModal title={new_sprint?.edit_mode ? 'Edit Sprint' : 'Create Sprint'} open={!!new_sprint} onCancel={onCancel}>
            <>
                {/* New Sprint Image */}
                <NewSprintImageIndex />
                {/* New Sprint Form */}
                <Form className='py-5'>
                    <NewSprintTitle />
                    <NewSprintDescription />
                    <SprintGoals />
                    <NewSprintAchievementIndex />
                    <NewSprintDurationIndex />
                    <NewSprintStartDateIndex />
                    {/*  New Sprint Form Footer */}
                    <FormFooter
                        okTitle={new_sprint?.edit_mode ? 'Save' : 'Create'}
                        onOk={
                            new_sprint?.edit_mode
                                ? () => new_sprint?.updateSprint()
                                : () => new_sprint?.activateNewSprint()
                        }
                        onCancel={onCancel}
                        disabled={!new_sprint?.title}
                    />
                </Form>
            </>
        </XModal>
    )
})
