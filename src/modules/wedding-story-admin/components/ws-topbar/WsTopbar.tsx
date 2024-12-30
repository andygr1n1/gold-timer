import { CreateInvitationEditorTrigger } from '../create-invitation-editor/CreateInvitationEditorTrigger'
import { GuestsCounter } from '../guests-counter/GuestsCounter'
import { GuestsFilters } from '../guests-filters/GuestsFilters'
import { TablesViewTrigger } from '../tables-view/TablesViewTrigger'

export const WsTopbar: React.FC = () => {
    return (
        <div className='w-full items-center justify-center flex flex-wrap flex-col gap-5 md:gap-0 md:flex-row '>
            <div className='w-[calc(100%-8px)] px-1 md:flex-[30%]'>
                <GuestsFilters />
            </div>

            <div className='w-[calc(100%-8px)] px-1 gap-2 md:flex-[30%] flex md:justify-center'>
                <TablesViewTrigger />
                <CreateInvitationEditorTrigger />
            </div>
            <div className='md:flex-[30%] flex justify-end'>
                <GuestsCounter />
            </div>
        </div>
    )
}
