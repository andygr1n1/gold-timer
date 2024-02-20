import { IconInfiniteLoading } from '@/assets/icons'

export const IsLoading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return isLoading ? (
        <IconInfiniteLoading width={100} height={100} className='absolute-center mx-auto text-blue-600/50 opacity-10' />
    ) : null
}
