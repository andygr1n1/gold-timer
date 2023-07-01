import { rootStore$ } from '@/StoreProvider'
import { IUser$ } from '@/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { Dispatch, SetStateAction } from 'react'

export const BackToViewModeButton: React.FC<{
    editMode: boolean
    setEditMode: Dispatch<SetStateAction<boolean>>
    defaultData: IUser$ | {}
}> = observer(({ editMode, setEditMode, defaultData }) => {
    const applyDefaultData = () => {
        rootStore$.onChangeField('user$', defaultData as IUser$)
    }

    return editMode ? (
        <button
            className='cursor-pointer text-inherit opacity-50 duration-300 hover:opacity-100'
            onClick={() => {
                setEditMode(!editMode)
                applyDefaultData()
            }}
        >
            <Icon icon='ion:arrow-back-outline' width={20} height={20} />
        </button>
    ) : null
})
