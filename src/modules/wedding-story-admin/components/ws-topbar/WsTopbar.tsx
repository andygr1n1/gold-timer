import { CreateInvitationEditorTrigger } from '../create-invitation-editor/CreateInvitationEditorTrigger'
import { GuestsCounter } from '../guests-counter/GuestsCounter'
import { GuestsFilters } from '../guests-filters/GuestsFilters'

export const WsTopbar: React.FC = () => {
    return (
        <div className='w-full items-center justify-center flex flex-wrap flex-col gap-5 md:gap-0 md:flex-row '>
            <div className='md:flex-[30%]'>
                <GuestsFilters />
            </div>

            <div className='md:flex-[30%] flex md:justify-center'>
                <CreateInvitationEditorTrigger />
            </div>
            <div className='md:flex-[30%] flex justify-end'>
                <GuestsCounter />
            </div>
        </div>
    )
}
