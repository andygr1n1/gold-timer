import { IconInfiniteLoading } from '@/assets/icons'

export const IsLoading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return isLoading ? (
        <IconInfiniteLoading
            width={100}
            height={100}
            className='absolute-center mx-auto animate-opacity-3 text-blue-600/50 opacity-30'
        />
    ) : null
}
