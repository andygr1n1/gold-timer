import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { AchContextMenu } from './components/AchContextMenu'
import type { IAch } from '@/modules/achievements/services/types'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { capitalize } from 'lodash-es'
import { AchStatus } from '../shared-components/ach-status/AchStatus'
import { cn } from '@/helpers/cn'
import styles from '../shared-components/Ach.module.scss'
import { useAchEditorDialog$ } from '@/modules/achievements/components/ach-editor-dialog/mst/provider'
import Tippy from '@tippyjs/react'

export const AchDefault: React.FC<{ ach: IAch }> = ({ ach }) => {
    const { onOpenViewMode } = useAchEditorDialog$()
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <Tippy content={capitalize(ach.title)} interactive={true} interactiveBorder={20} delay={100} className=''>
            <div id={`ach-${ach.id}`} className={cn(styles['ach'], `flex-[30%] min-w-[120px] max-w-[120px]`)}>
                <XDropdown
                    open={popoverState}
                    onOpenChange={() => {
                        setPopoverState(!popoverState)
                    }}
                    trigger={['contextMenu']}
                    dropdownRender={() => <AchContextMenu onClose={() => setPopoverState(false)} ach={ach} />}
                    destroyPopupOnHide
                >
                    <div
                        onClick={() => {
                            onOpenViewMode({ edit_id: ach.id })
                        }}
                        className='flex cursor-pointer relative'
                    >
                        <img
                            src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}achievements/${ach.img_path}`}
                            className={cn(
                                'animate-opacity-3 w-full flex h-full rounded-lg',
                                ach.freezed && 'opacity-50',
                            )}
                            alt={ach.title}
                            loading='lazy'
                            decoding='async'
                        />
                    </div>
                </XDropdown>
                <AchStatus ach={ach} />
            </div>
        </Tippy>
    )
}

export default AchDefault
