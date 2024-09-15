import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { AchContextMenu } from './components/AchContextMenu'
import type { IAch } from '@/modules/achievements/services/types'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { capitalize } from 'lodash-es'
import { AchStatus } from '../shared-components/ach-status/AchStatus'
import { cn } from '@/helpers/cn'
import styles from '../shared-components/Ach.module.scss'
import { useAchEditorDialog$ } from '@/modules/achievements/components/ach-editor-dialog/mst/provider'

export const AchDefault: React.FC<{ ach: IAch }> = ({ ach }) => {
    const { onOpenViewMode } = useAchEditorDialog$()
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <div
            id={`ach-${ach.id}`}
            className={cn(styles['ach'], `flex-[30%] max-w-[120px]`)}
            onClick={() => {
                onOpenViewMode({ edit_id: ach.id })
            }}
        >
            <XDropdown
                open={popoverState}
                onOpenChange={() => {
                    setPopoverState(!popoverState)
                }}
                trigger={['contextMenu']}
                dropdownRender={() => <AchContextMenu onClose={() => setPopoverState(false)} ach={ach} />}
                destroyPopupOnHide
            >
                <div className='flex cursor-pointer relative'>
                    <img
                        src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}achievements/${ach.img_path}`}
                        className='animate-opacity-3 w-full flex h-full rounded-lg'
                        alt={ach.title}
                    />
                    <AchStatus ach={ach} />
                </div>
            </XDropdown>
            <XTooltip place='top' anchorSelect={`#ach-${ach.id}`} className='!px-4 !py-2'>
                {capitalize(ach.title)}
            </XTooltip>
        </div>
    )
}

export default AchDefault
