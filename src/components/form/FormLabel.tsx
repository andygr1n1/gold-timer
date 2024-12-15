import { capitalize } from 'lodash-es'
import { observer } from 'mobx-react-lite'

export const FormLabel: React.FC<{ title: string; uppercase?: boolean }> = observer(({ title, uppercase = false }) => {
    return (
        <div className='text-cText font-inter mb-1 text-base min-w-fit font-extralight opacity-70'>
            {uppercase ? title.toUpperCase() : capitalize(title)}
        </div>
    )
})
