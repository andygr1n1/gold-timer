// import { optimizeActiveGoalsData } from '@/modules/goals/helpers/optimizeActiveGoalsData'
// import { resolveData } from '@/helpers/tryCatchRequest'
// import { processError } from '@/helpers/processMessage'
// import { Client } from 'gold-timer-genql/lib/generated'
// import { IGoalSchema } from '../types'
// import { IRitualizeUpdateFields } from './types'

// export const mutation_goalGoalRitualize = async (
//     client: Client,
//     updateFields: IRitualizeUpdateFields,
// ): Promise<IGoalSchema | null> => {
//     return await resolveData<null, IGoalSchema | null>(
//         () =>
//             client
//                 .mutation({
//                     __name: 'mutation_goalGoalRitualize',
//                     update_goals_by_pk: {
//                         __args: {
//                             pk_columns: { id: updateFields.id },
//                             _set: {
//                                 created_at: updateFields.created_at,
//                                 finished_at: updateFields.finished_at,
//                                 status: 'active',
//                             },
//                         },
//                         id: true,
//                         created_at: true,
//                         deleted_at: true,
//                         finished_at: true,
//                         is_favorite: true,
//                         title: true,
//                         slogan: true,
//                         description: true,
//                         status: true,
//                         difficulty: true,
//                         goal_ritual: {
//                             ritual_id: true,
//                             ritual_type: true,
//                             ritual_power: true,
//                             ritual_interval: true,
//                             created_at: true,
//                         },
//                     },
//                     update_goals_rituals_by_pk: {
//                         __args: {
//                             pk_columns: { goal_id: updateFields.id, ritual_id: updateFields.ritual_id },
//                             _set: { ritual_power: updateFields.ritual_power },
//                         },
//                         goal_id: true,
//                     },
//                 })
//                 .then((res) => {
//                     return optimizeActiveGoalsData(res.update_goals_by_pk as IGoalSchema)[0]
//                 }),
//         (e) => {
//             processError(`mutation_goalGoalRitualize: ${e}`)
//             return null
//         },
//     )
// }

export {}
