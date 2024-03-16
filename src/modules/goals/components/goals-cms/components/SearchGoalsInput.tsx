import { observer } from 'mobx-react-lite'
import { XInput } from '@/components-x/x-input/XInput'
import { IconSearch } from '@/assets/icons/IconSearch'

export const SearchGoalsInput: React.FC = observer(() => {
    return (
        <XInput
            value={''}
            onChange={() => undefined}
            startIcon={<IconSearch width={24} height={24} />}
            placeholder='Find me...'
            width='!max-w-[300px] !w-full'
        />
    )
})
