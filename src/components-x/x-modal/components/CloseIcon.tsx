import { IconClose } from '@/assets/icons'

export const CloseIcon: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
    return (
        <div className='absolute right-1 top-[-35px] '>
            <IconClose
                className={`h-8 w-8 cursor-pointer text-white/70 duration-300 hover:h-8 hover:w-8 hover:text-blue-500`}
                onClick={onCancel}
            />
        </div>
    )
}
