import type { ResultOf } from 'gql.tada'
import type { fragment_weddingGroups } from './services/graphql/fragment_weddingGroups'
import type { fragment_weddingGuest } from './services/graphql/fragment_weddingGuest'

export type IInvitationEditorSchema = {
    /* id is for editing purpose */
    id?: string
    groupName: string
    name1: string
    name2: string
    surname1?: string
    surname2?: string
    table1?: number
    table2?: number
}

export type IWeddingGroup = ResultOf<typeof fragment_weddingGroups> & {
    wedding_guests: ResultOf<typeof fragment_weddingGuest>[]
}
export type IWeddingGuest = ResultOf<typeof fragment_weddingGuest>
