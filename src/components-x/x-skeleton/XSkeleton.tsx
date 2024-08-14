import { Skeleton } from 'antd'

export const XSkeleton: React.FC<{ length: number }> = ({ length = 1 }) => {
    return (
        <div className='flex w-full flex-col gap-5'>
            {Array.from({ length }).map((_, index) => (
                <Skeleton.Input key={index} active={true} size={'large'} block={true} />
            ))}
        </div>
    )
}
