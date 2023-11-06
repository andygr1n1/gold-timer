import { GoalFormFilters } from '@/components/goal-form-filters/GoalFormFilters'
import { useGoalsStore } from '@/StoreProvider'
import { Collapse, Divider } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { PanelBody } from './components/PanelBody'
import { PanelHeader } from './components/PanelHeader'
import { PanelSettings } from './components/PanelSettings'

const { Panel } = Collapse

export const GoalsCollapse: React.FC = observer(() => {
    const {
        active_collapse_key,
        onChangeField,
        goals_filter$: { goalsCollapseData },
    } = useGoalsStore()

    const setActiveKey = (key: string | string[]) => onChangeField('active_collapse_key', key.toString())

    useEffect(() => {
        const element = document.getElementById(`${active_collapse_key}`)
        if (element) {
            // wrapped in setTimeout to fix scrollIntoView bahavior
            const timer = setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                clearTimeout(timer)
            }, 100)
        }
    }, [])

    return (
        <div className='mb-5'>
            <Divider />
            <GoalFormFilters />
            <Divider />
            <Collapse accordion activeKey={active_collapse_key} onChange={setActiveKey}>
                {goalsCollapseData.data.map((goal) => (
                    <Panel
                        showArrow={false}
                        header={<PanelHeader goal={goal} />}
                        key={goal.id}
                        extra={<PanelSettings goal={goal} />}
                    >
                        <PanelBody goal={goal} />
                    </Panel>
                ))}
            </Collapse>
        </div>
    )
})
