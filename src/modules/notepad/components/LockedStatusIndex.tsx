import { useFetchLockedStatus } from '../service/useFetchLockedStatus'
import { useMutateLockedStatus } from '../service/useMutateLockedStatus'
import { LockedStatus } from './LockedStatus'

export const LockedStatusIndex: React.FC = () => {
    const { isLocked, isLoading } = useFetchLockedStatus()

    const { mutate } = useMutateLockedStatus()

    if (isLoading) return null

    return <LockedStatus isLocked={!!isLocked} onClick={(locked) => mutate({ locked })} />
}
