import { IconEdit, IconEye, IconNew } from '@/assets/icons'
import { useAchEditor$ } from '@/modules/achievements/components-shared/ach-editor-dialog/stores/useAchEditor.store'

const AchEditorTitle = () => {
    const { newMode, editMode } = useAchEditor$()
    let stateText: React.ReactNode = (
        <>
            <IconEye className='flex items-center justify-center' width={24} height={24} />
            View Achievement
        </>
    )
    if (newMode)
        stateText = (
            <>
                <IconNew width={28} height={28} />
                New Achievement
            </>
        )
    if (editMode)
        stateText = (
            <>
                <IconEdit width={24} height={24} />
                Edit Achievement
            </>
        )

    return (
        <span className='flex items-center justify-center gap-5 focus-visible:outline-none min-w-[200px]' tabIndex={0}>
            {stateText}
        </span>
    )
}

export default AchEditorTitle
