import { type TabsProps } from 'antd'
import { AchInfo } from '../components/ach-info/AchInfo'

export const useAchEditorTabs = () => {
    const editorTabs: TabsProps['items'] = [{ key: '1', label: 'Achievement', children: <AchInfo /> }]

    return { editorTabs }
}
