// import { useRootStore } from '@/StoreProvider'
// import { observer } from 'mobx-react-lite'
// import { Goal } from './goal/Goal'

// export const ActiveHotGoals: React.FC = observer(() => {
//     const {
//         goals$: { activeHotGoals, activeGoalsFilter },
//     } = useRootStore()

//     return activeGoalsFilter && activeHotGoals.length ? (
//         <div className='flex flex-col'>
//             <h3 className='flex pb-4 font-mono font-bold'>
//                 <span>Hot</span>({activeHotGoals.length})
//             </h3>
//             <div className='flex flex-wrap gap-8 pb-4'>
//                 {activeHotGoals.map((goal) => (
//                     <Goal key={goal.id} goal={goal} />
//                 ))}
//             </div>
//         </div>
//     ) : null
// })

export {}
