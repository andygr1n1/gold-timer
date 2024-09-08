import { Form } from 'formik'
import { IconInfiniteLoading } from '@/assets/icons'
import { AchEditorToolbar } from './ach-editor-toolbar/AchEditorToolbar'
import { AchEditorTabs } from './ach-editor-tabs/AchEditorTabs'
import { useAchData } from '../hooks/useAchData'

export const AchEditorForm = () => {
    const { isLoading } = useAchData()

    return (
        <Form>
            {isLoading && (
                <div className='w-full h-full z-[100] bg-global-bg-plasma left-0 flex items-center duration-300 justify-center top-0 fixed'>
                    <IconInfiniteLoading className='w-20 h-20 text-blue-500 duration-300' />
                </div>
            )}
            <AchEditorToolbar />
            <AchEditorTabs />
        </Form>
    )
}
