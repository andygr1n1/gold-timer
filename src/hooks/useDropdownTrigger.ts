import { useEffect, useState } from 'react'

export const useDropdownTrigger = ({ mobileTrigger, disabled }: { mobileTrigger: boolean; disabled: boolean }) => {
    const [trigger, setTrigger] = useState<('contextMenu' | 'click' | 'hover')[]>(['contextMenu'])
    useEffect(() => {
        setTrigger(disabled ? [] : ['click'])
    }, [!!mobileTrigger, disabled])

    return { dropdownTrigger: trigger }
}
