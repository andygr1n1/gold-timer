import { Popover, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { Fragment, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useGoalsStore } from '@/StoreProvider'
import { IGoal$ } from '@/mst/types'

export const PanelSettingsTooltip: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const [finishExtension, setFinishExtension] = useState(false)
    const { goCreateEditMode, onChangeField } = useGoalsStore()

    return (
        <>
            <Popover className='relative'>
                {() => (
                    <>
                        <Popover.Button>
                            <Icon
                                className='cursor-pointer text-gray-600 duration-300 hover:text-sky-600'
                                icon='material-symbols:settings-rounded'
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                        >
                            <Popover.Panel className='absolute right-0 z-10'>
                                <div
                                    onClick={(event) => {
                                        event.stopPropagation()
                                    }}
                                    className='w-fit min-w-[150px]  overflow-hidden  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'
                                >
                                    <div
                                        title='Edit goal'
                                        onClick={() => {
                                            onChangeField('active_collapse_key', goal.id)
                                            goCreateEditMode(goal)
                                        }}
                                        className='border-b-solid border-gray-500/20 p-2 font-neon text-xs hover:bg-sky-100'
                                    >
                                        Edit mode
                                    </div>
                                    <div
                                        onClick={() => {
                                            onChangeField('active_collapse_key', goal.id)
                                            goal.createNewChild()
                                        }}
                                        title='New Child'
                                        className='border-b-solid border-gray-500/20 p-2 font-neon text-xs hover:bg-sky-100'
                                    >
                                        Create child goal
                                    </div>
                                    <div
                                        onClick={() => setFinishExtension(!finishExtension)}
                                        className={`
                                                    border-b-solid border-gray-500/20 p-2 font-neon text-xs hover:bg-sky-100
                                                    ${finishExtension ? 'bg-sky-100' : ''}`}
                                    >
                                        Finish goal
                                    </div>
                                    {finishExtension && (
                                        <>
                                            <button
                                                onClick={goal.completeGoal}
                                                className='border-b-solid w-full cursor-pointer
                                                    border-gray-500/20 bg-emerald-500 p-2 text-left
                                                    font-neon text-xs text-white duration-300 hover:bg-emerald-700'
                                            >
                                                Goal Completed
                                            </button>
                                            <button
                                                onClick={goal.goGoalRitualizedMode}
                                                className='
                                                    border-b-solid w-full cursor-pointer border-gray-500/20 bg-indigo-500 p-2 text-left
                                                    font-neon text-xs text-white duration-300 hover:bg-indigo-700'
                                            >
                                                Create Ritual
                                            </button>
                                            <button
                                                onClick={goal.failGoal}
                                                className='
                                                    border-b-solid w-full cursor-pointer
                                                    border-gray-500/20 bg-rose-500 p-2 text-left
                                                    font-neon text-xs text-white duration-300 hover:bg-rose-700'
                                            >
                                                Goal Failed
                                            </button>
                                        </>
                                    )}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    )
})
