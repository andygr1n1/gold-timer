import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { getSnapshot } from 'mobx-state-tree'
import { IUser$ } from '@/mst/types'
import { Tooltip } from 'antd'
import { BackToViewModeButton } from './BackToViewModeButton'
import { UpdateUserDetailsButton } from './UpdateUserDetailsButton'
import { EditConfirmDialog } from './EditConfirmDialog'
import { ProfileUserDetail } from './user-info/ProfileUserDetail'
import { ProfileUserBirthday } from './user-info/ProfileUserBirthday'

export const ProfileDetails: React.FC = observer(() => {
    const { name, email, phone, birthday, password, onChangeField, userStore, fetchUserPassword } = useUserStore()
    const [editMode, setEditMode] = useState(false)
    const [defaultData, setDefaultData] = useState<IUser$ | {}>({})
    const [repeatPassword, setRepeatPassword] = useState(password)
    const [editConfirmDialog, setEditConfirmDialog] = useState(false)
    const sendIsDisabled: boolean = editMode && password !== repeatPassword

    return (
        <div>
            <div className='relative flex min-h-[300px] w-fit flex-col rounded-md p-5'>
                <h4 className='mb-4'>Details</h4>
                <div className='flex w-fit flex-auto flex-col gap-2'>
                    <Tooltip title={editMode && 'Email is not editable'} placement='topRight'>
                        <div>
                            <ProfileUserDetail
                                label='email'
                                value={email}
                                disabled={true}
                                onChange={(newValue) => onChangeField('email', newValue)}
                            />
                        </div>
                    </Tooltip>
                    <ProfileUserDetail
                        label='name'
                        value={name}
                        disabled={!editMode}
                        onChange={(newValue) => onChangeField('name', newValue)}
                    />
                    <ProfileUserDetail
                        label='phone'
                        value={phone}
                        disabled={!editMode}
                        onChange={(newValue) => {
                            const reg = /^[+|0-9]*$/
                            if (reg.test(newValue) || newValue === '' || newValue === '-') {
                                onChangeField('phone', newValue)
                            }
                        }}
                    />
                    {birthday && (
                        <ProfileUserBirthday
                            label='birthday'
                            disabled={!editMode}
                            value={birthday}
                            onChange={(newDate) => newDate && onChangeField('birthday', new Date(newDate))}
                        />
                    )}

                    <ProfileUserDetail
                        label='password'
                        value={editMode ? password : '*************'}
                        disabled={!editMode}
                        onChange={(newValue) => onChangeField('password', newValue)}
                    />
                    {editMode && (
                        <ProfileUserDetail
                            label='password'
                            value={repeatPassword}
                            disabled={!editMode}
                            onChange={(newValue) => setRepeatPassword(newValue)}
                        />
                    )}
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                {/* footer */}
                <div className='mt-5 flex items-center justify-end gap-3  text-sm'>
                    <BackToViewModeButton editMode={editMode} defaultData={defaultData} setEditMode={setEditMode} />
                    <UpdateUserDetailsButton
                        editMode={editMode}
                        sendIsDisabled={sendIsDisabled}
                        setEditMode={setEditMode}
                        onConfirmEditMode={() => {
                            setRepeatPassword('')
                            setDefaultData(getSnapshot(userStore))
                            fetchUserPassword()
                            setEditConfirmDialog(true)
                        }}
                    />
                </div>
            </div>
            {/*  */}
            {/*  */}
            {/*  */}
            {/* EditConfirmDialog */}
            <EditConfirmDialog
                open={editConfirmDialog}
                onCancel={() => {
                    setEditConfirmDialog(false)
                }}
                onOk={() => {
                    setEditConfirmDialog(false)
                    setEditMode(true)
                }}
                password={password}
            />
        </div>
    )
})
