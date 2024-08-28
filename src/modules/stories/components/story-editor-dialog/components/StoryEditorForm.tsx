import { Form } from 'formik'
import { StoryEditorTabs } from './story-editor-tabs/StoryEditorTabs'

export const StoryEditorForm = () => {
    return (
        <Form>
            <StoryEditorTabs />
        </Form>
    )
}
