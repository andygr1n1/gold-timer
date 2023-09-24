import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

export const UserName: React.FC = observer(() => {
    const { name } = useUserStore()
    return <div className='text-cText font-droid-bold opacity-70'>{name}</div>
})
