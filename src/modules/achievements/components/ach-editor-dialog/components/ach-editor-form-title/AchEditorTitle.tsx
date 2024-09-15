import { IconEdit, IconEye, IconNew } from '@/assets/icons'
import { useAchEditorDialog$ } from '../../mst/provider'
import { observer } from 'mobx-react-lite'

const AchEditorTitle = observer(() => {
    const { readonly } = useAchEditorDialog$()
    const { edit_id } = useAchEditorDialog$()
    let stateText: React.ReactNode = (
        <>
            <IconEye className='flex items-center justify-center' width={24} height={24} />
            View Achievement
        </>
    )
    if (!edit_id)
        stateText = (
            <>
                <IconNew width={28} height={28} />
                New Achievement
            </>
        )
    if (edit_id && !readonly)
        stateText = (
            <>
                <IconEdit width={24} height={24} />
                Edit Achievement
            </>
        )

    return (
        <span className='flex items-center justify-start gap-5 focus-visible:outline-none min-w-[200px]' tabIndex={0}>
            {stateText}
        </span>
    )
})

export default AchEditorTitle
