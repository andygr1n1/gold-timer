import { useFetchGuestsList } from '../../services/fetch-guests-list/useFetchGuestsList'
import { WeddingGroup } from './components/WeddingGroup'

export const GuestsIndex: React.FC = () => {
    const { data } = useFetchGuestsList()

    return (
        <div className='flex flex-col gap-4 w-full my-2 mx-auto justify-center items-center'>
            {data.map((weddingGroup) => (
                <WeddingGroup key={weddingGroup.id} weddingGroup={weddingGroup} />
            ))}
        </div>
    )
}


// options: delete group, edit group (change name of group, set table number), registration link, booking link, hide group
// create invitation -> possibility to create solo invitation
// filters:
// registered, not registered, checked_in, not checked_in, hidden

// guest permission
// when user if going to ourwedding site with a valid invitation link, a token should be generated with a guest role
// hasura should fetch with bearer token only the guest data and check by group_id (invitation link)

// after registration, invitation link is not valid anymore, only the booking will be valid to access data, and edit it
// booking number will be sent by email to the guest
// when guest is going to ourwedding site /index, here will be a form to fill with booking number, and email
// to grant access to a new token with a guest role and modification permissions
