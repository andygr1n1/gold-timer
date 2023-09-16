import { Form } from 'antd'
import { useSprintsStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { NewSprintTitle } from './components/NewSprintTitle'
import { NewSprintDescription } from './components/NewSprintDescription'
import { NewSprintImageIndex } from './components/NewSprintImageIndex'
import { SprintGoals } from './components/SprintGoals'
import { NewSprintAchievementIndex } from './components/NewSprintAchievementIndex'
import { NewSprintDurationIndex } from './components/NewSprintDurationIndex'
import { NewSprintStartDateIndex } from './components/NewSprintStartDateIndex'
import { XLoader } from '@/components-x/x-loader/XLoader'
import { FormFooter } from '@/components/form/FormFooter'
import { cloneDeep } from 'lodash-es'

export const CreateEditSprintDialog: React.FC = observer(() => {
    const { onChangeField, new_sprint } = useSprintsStore()

    const onCancel = () => onChangeField('new_sprint', undefined)

    console.log('====================================')
    console.warn('newsprint ID - ', new_sprint?.id)
    console.warn('sprint details', cloneDeep(new_sprint))
    console.log('====================================')

    return (
        <XModal title={new_sprint?.edit_mode ? 'Edit Sprint' : 'Create Sprint'} open={!!new_sprint} onCancel={onCancel}>
            {new_sprint?.loading ? (
                <XLoader />
            ) : (
                <div className='animate-opacity-5'>
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
                </div>
            )}
        </XModal>
    )
})
