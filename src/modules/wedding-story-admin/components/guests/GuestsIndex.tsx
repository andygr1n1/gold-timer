export const GuestsIndex: React.FC = () => {
    return (
        <div>
            <div>Group name (Group Id = invitation link id)</div>
            {/*  */}
            <div>Guest1 info</div>
            <div>Guest2 info</div>
            <div>info: </div>
            <div>name</div>
            <div>email - to view details</div>
            <div>table number and seating</div>
            {/*  */}
            <div>booking number - to edit personal data</div>
            <div>invitation status - accepted - true - false - (pending, accepted)</div>
            <div>check in - true - false (2 weeks before the wedding)</div>
        </div>
    )
}


/* total guests, total accepted, total checked_in */
// filter by invitation status, check in