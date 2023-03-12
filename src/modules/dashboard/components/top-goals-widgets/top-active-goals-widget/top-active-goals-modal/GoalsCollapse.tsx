import { GoalFormFilters } from '@/components/goal-form-filters/GoalFormFilters'
import { useGoalsStore } from '@/StoreProvider'
import { Collapse, Divider } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { PanelBody } from './components/PanelBody'
import { PanelHeader } from './components/PanelHeader'
import { PanelSettings } from './components/PanelSettings'

const { Panel } = Collapse

export const GoalsCollapse = observer(() => {
    const {
        filter$: { activeFilteredGoals },
        active_collapse_key,
        onChangeField,
    } = useGoalsStore()

    const setActiveKey = (key: string | string[]) => onChangeField('active_collapse_key', key.toString())

    useEffect(() => {
        const element = document.getElementById(`${active_collapse_key}`)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }, [])

    return (
        <div className='mb-5'>
            <Divider />
            <GoalFormFilters />
            <Divider />
            <Collapse accordion activeKey={active_collapse_key} onChange={setActiveKey}>
                {activeFilteredGoals.map((goal) => (
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
