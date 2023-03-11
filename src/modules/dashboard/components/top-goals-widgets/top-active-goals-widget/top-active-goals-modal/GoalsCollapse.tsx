import { useGoalsStore } from '@/StoreProvider'
import { Collapse } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { PanelBody } from './components/PanelBody'
import { PanelHeader } from './components/PanelHeader'
import { PanelSettings } from './components/PanelSettings'

const { Panel } = Collapse

export const GoalsCollapse = observer(() => {
    const {
        topActiveGoals: { all },
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
            <h1>ActiveGoalsModal Filters</h1>
            <Collapse accordion activeKey={active_collapse_key} onChange={setActiveKey}>
                {all.map((goal) => (
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
