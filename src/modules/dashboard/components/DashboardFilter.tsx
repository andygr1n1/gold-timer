// import { observer } from 'mobx-react-lite'
// import { Icon } from '@iconify/react'
// import { Checkbox, Divider } from 'antd'
// import { STATUS_ENUM_FILTERS } from '@/helpers/enums'
// import { useGoalsStore } from '@/StoreProvider'
// import { useState } from 'react'

// export const DashboardFilter: React.FC = observer(() => {
//     const { goals_checked_list_filter, onCheckAllGoalsChange, onChangeCheckGoals } = useGoalsStore()

//     const [filterState, setFilterState] = useState(false)

//     return (
//         <div className='relative flex flex-col items-end gap-10 font-mono'>
//             {filterState && (
//                 <div
//                     className='
//                                 absolute top-[50px] left-4 z-40 flex
//                                 h-[400px] w-[200px] animate-opacity flex-col
//                                 rounded-md bg-white p-5 shadow-md'
//                 >
//                     <Checkbox
//                         indeterminate={
//                             goals_checked_list_filter.length > 0 &&
//                             goals_checked_list_filter.length < Object.values(STATUS_ENUM_FILTERS).length
//                         }
//                         onChange={onCheckAllGoalsChange}
//                         checked={goals_checked_list_filter.length === Object.values(STATUS_ENUM_FILTERS).length}
//                     >
//                         All goals
//                     </Checkbox>
//                     <Divider />
//                     <Checkbox.Group
//                         className='flex flex-col gap-3'
//                         options={Object.values(STATUS_ENUM_FILTERS)}
//                         value={goals_checked_list_filter}
//                         onChange={onChangeCheckGoals}
//                     />
//                 </div>
//             )}
//             <Icon
//                 icon='mdi:filter-cog'
//                 className='ml-auto flex cursor-pointer self-end text-gray-700 transition-all duration-300 hover:text-sky-600'
//                 height={25}
//                 width={25}
//                 onClick={() => setFilterState(!filterState)}
//             />
//         </div>
//     )
// })

export {}
