import { IconPlaceSetting } from '@/assets/icons/IconPlaceSetting'
import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import type { IInvitationEditorSchema, IWeddingGuest } from '@/modules/wedding-story-admin/services/types'
import { useFormikContext } from 'formik'

export const GuestTableInput: React.FC<{ type: 'name1' | 'name2'; guest: IWeddingGuest }> = ({ type, guest }) => {
    const formikContext = useFormikContext<IInvitationEditorSchema>()

    const isFirstGuest = type === 'name1'

    return (
        <div>
            <FormLabel title={`${isFirstGuest ? 'First guest' : 'Second guest'}`} />
            <div className='flex items-center gap-2'>
                <XInput
                    readOnly
                    data-testid={`guest-name-input-${type}`}
                    value={(guest.first_name || '') + ' ' + (guest.last_name || '')}
                />
                <div className='max-w-[100px]'>
                    <XInput
                        startIcon={<IconPlaceSetting />}
                        className='!max-w-[40px]'
                        value={formikContext.values[isFirstGuest ? 'table1' : 'table2']}
                        name={isFirstGuest ? 'table1' : 'table2'}
                        onChange={(e) => {
                            const value = e.target.value
                            const regex = /^(100|[1-9]?[0-9]?)$/ // Matches numbers 0-100
                            if (value === '' || regex.test(value)) {
                                formikContext.setFieldValue(isFirstGuest ? 'table1' : 'table2', value)
                            }
                        }}
                        maxLength={3}
                    />
                </div>
            </div>
        </div>
    )
}
