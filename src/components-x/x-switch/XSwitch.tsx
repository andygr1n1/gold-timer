import { Switch } from '@headlessui/react'

export const XSwitch: React.FC<{ checked: boolean; onChange: (checked: boolean) => void }> = ({
    checked,
    onChange,
}) => {
    return (
        <Switch
            checked={checked}
            onChange={onChange}
            className={`${checked ? 'bg-xBlue-2' : 'bg-xBlue-1'}
            relative m-0 inline-flex h-[24px] w-[54px] shrink-0 cursor-pointer
            rounded-full p-0 transition-colors duration-200 ease-in-out
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span
                aria-hidden='true'
                className={`${checked ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none  h-[24px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    )
}
