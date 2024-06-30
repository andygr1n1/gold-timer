import { capitalize } from 'lodash-es'
import { observer } from 'mobx-react-lite'

export const FormLabel: React.FC<{ title: string }> = observer(({ title }) => {
    return (
        <div className='text-cText font-inter mb-1 text-base min-w-fit font-extralight opacity-70'>
            {capitalize(title)}
        </div>
    )
})
