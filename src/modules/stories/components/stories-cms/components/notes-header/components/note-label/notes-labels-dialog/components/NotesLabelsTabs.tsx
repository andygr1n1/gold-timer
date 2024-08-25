import { Tabs } from 'antd'
import { useNotesLabelsTabs } from '../hooks/useNotesLabelsTabs'

export const NotesLabelsTabs: React.FC = () => {
    const { notesLabelsTabs } = useNotesLabelsTabs()
    return (
        <Tabs
            className='[&_.ant-tabs-nav::before]:border-slate-500 [&_.ant-tabs-nav]:bg-global-2-bg-plasma
            [&_.ant-tabs-nav]:sticky h-full [&_.ant-tabs-content]:h-full
            [&_.ant-tabs-tabpane]:h-full'
            tabBarStyle={{
                top: -20,
                // position:'sticky',
                // background: 'var(--colors-global-bg-plasma)',
                zIndex: 10,
            }}
            defaultActiveKey='1'
            items={notesLabelsTabs}
            // tabBarExtraContent={}
            // onChange={onChange}
            indicator={{ align: 'center' }}
        />
    )
}

export default NotesLabelsTabs
