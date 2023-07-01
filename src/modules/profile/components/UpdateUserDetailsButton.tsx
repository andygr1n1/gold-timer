import { useUserStore } from '@/StoreProvider'
import { Tooltip } from 'antd'
import { observer } from 'mobx-react-lite'
import { Dispatch, SetStateAction } from 'react'

export const UpdateUserDetailsButton: React.FC<{
    editMode: boolean
    sendIsDisabled: boolean
    setEditMode: Dispatch<SetStateAction<boolean>>
    onConfirmEditMode: () => void
}> = observer(({ editMode, setEditMode, sendIsDisabled, onConfirmEditMode }) => {
    const { saveUpdatedDetails } = useUserStore()

    return (
        <Tooltip placement='bottom' title={sendIsDisabled ? 'passwords are not same' : ''}>
            <div>
                <button
                    disabled={sendIsDisabled}
                    className={`cursor-pointer pb-1 font-bold text-inherit opacity-50 duration-300 hover:opacity-100 disabled:pointer-events-none disabled:cursor-default  disabled:text-gray-100  disabled:!opacity-50  disabled:hover:text-gray-100  ${
                        editMode ? 'text-sky-500 !opacity-100' : ''
                    }`}
                    onClick={() => {
                        if (editMode) {
                            saveUpdatedDetails()
                            setEditMode(!editMode)
                        } else {
                            onConfirmEditMode()
                        }
                    }}
                >
                    {editMode ? 'save' : 'edit'}
                </button>
            </div>
        </Tooltip>
    )
})
