import { HashLoader } from 'react-spinners'
import { LoaderSizeProps } from 'react-spinners/helpers/props'

export const RdLoader: React.FC<LoaderSizeProps> = (props) => {
    return (
        <div className='flex h-full w-full items-center justify-center'>
            <HashLoader {...props} color='var(--spaceblue)' />
        </div>
    )
}
