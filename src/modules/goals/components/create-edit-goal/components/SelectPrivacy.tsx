// import { PRIVACY_ENUM } from '@/helpers/enums'
// import { useGoalsStore } from '@/StoreProvider'
// import { Divider, Select } from 'antd'
// import { observer } from 'mobx-react-lite'

// export const SelectPrivacy: React.FC = observer(() => {
//     const { new_goal, is_creator_mode } = useGoalsStore()

//     if (!new_goal) return null

//     const { privacy, onChangeField } = new_goal

//     const options = [
//         {
//             value: PRIVACY_ENUM.PUBLIC,
//             label: PRIVACY_ENUM.PUBLIC,
//         },
//         {
//             value: PRIVACY_ENUM.PRIVATE,
//             label: PRIVACY_ENUM.PRIVATE,
//         },
//         {
//             value: PRIVACY_ENUM.FRIEND_ZONE,
//             label: PRIVACY_ENUM.FRIEND_ZONE,
//         },
//     ]

//     return (
//         <>
//             <div>
//                 <h3 className='py-2'>Privacy: </h3>
                // <Select
                //     disabled={!is_creator_mode}
                //     value={privacy}
                //     options={options}
                //     onSelect={(value) => onChangeField('privacy', value)}
                // />
//             </div>
//             <Divider />
//         </>
//     )
// })

export {}
