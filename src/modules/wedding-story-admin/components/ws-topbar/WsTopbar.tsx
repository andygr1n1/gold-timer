import { CreateInvitationEditorTrigger } from '../create-invitation-editor/CreateInvitationEditorTrigger'
import { GuestsCounter } from '../guests-counter/GuestsCounter'
import { GuestsFilters } from '../guests-filters/GuestsFilters'

export const WsTopbar: React.FC = () => {
    return (
        <div className='w-full items-center justify-center flex flex-wrap'>
            <div className='flex-[30%]'>
                <GuestsFilters />
            </div>
            <div className='flex-[30%] flex justify-center'>
                <GuestsCounter />
            </div>
            <div className='flex-[30%] flex justify-end'>
                <CreateInvitationEditorTrigger />
            </div>
        </div>
    )
}
