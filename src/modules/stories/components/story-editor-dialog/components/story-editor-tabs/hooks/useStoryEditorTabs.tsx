import { type TabsProps } from 'antd'
import { NewStoryInfo } from '../components/new-story-info/NewStoryInfo'

export const useStoryEditorTabs = () => {
    const storyEditorTabs: TabsProps['items'] = [{ key: '1', label: 'Note', children: <NewStoryInfo /> }]

    return { storyEditorTabs }
}
