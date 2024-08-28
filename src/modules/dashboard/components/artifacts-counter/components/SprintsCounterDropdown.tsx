// import { observer } from 'mobx-react-lite'

// import { useRoot$ } from '@/modules/app/mst/StoreProvider'
// import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
// import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
// import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
// import { type ReactNode } from 'react'
// import { IconNew } from '@/assets/icons'
// import { StyledButton } from '@/components/buttons/StyledButton'

// export const SprintsCounterDropdown: React.FC<{ button: ReactNode }> = observer(({ button }) => {
//     return (
//         <XDropdown
//             trigger={['hover']}
//             dropdownRender={() => <DropdownRender />}
//             placement='bottomLeft'
//             overlayClassName='!z-[55]'
//         >
//             <div>{button}</div>
//         </XDropdown>
//     )
// })

// const DropdownRender = observer(() => {
//     const {
//         sprints$: { openSprintCreateMode },
//     } = useRoot$()
//     return (
//         <XMenuDropdown>
//             <XMenuItem onClick={() => openSprintCreateMode()}>
//                 <StyledButton variant='text' size='small' startIcon={<IconNew width={24} height={24} />}>
//                     <span className='flex w-[110px] justify-start capitalize'>Add sprint</span>
//                 </StyledButton>
//             </XMenuItem>
//         </XMenuDropdown>
//     )
// })
export {}
