import { AchFilterSelect } from './components/AchFilterSelect'
import { AddAch } from './components/AddAch'
import { SearchAchInput } from './components/search-ach-input/SearchAchInput'

export const AchHeader: React.FC = () => {
    return (
        <div className='flex w-full mx-auto gap-8'>
            <div className='flex flex-col w-full gap-4'>
                <AddAch />
                <div className='flex w-full items-center justify-end gap-2'>
                    <SearchAchInput />
                    <div className='flex gap-2 w-[108px]'>
                        <AchFilterSelect />
                    </div>
                </div>
            </div>
        </div>
    )
}
