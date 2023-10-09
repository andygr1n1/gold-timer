import { Switch } from '@headlessui/react'
import styles from './XSwitch.module.scss'
import clsx from 'clsx'
export const XSwitch: React.FC<{ checked: boolean; onChange: (checked: boolean) => void }> = ({
    checked,
    onChange,
}) => {
    return (
        <Switch
            checked={checked}
            onChange={onChange}
            className={clsx(
                styles['x-switch'],
                `${checked ? 'bg-xBlue-2' : 'bg-xBlue-1 border'}
                relative inline-flex h-[24px] w-[54px] cursor-pointer
                rounded-full p-0 transition-colors duration-200 ease-in-out
                `,
            )}
        >
            <span
                aria-hidden='true'
                className={`${checked ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none  h-[24px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    )
}
