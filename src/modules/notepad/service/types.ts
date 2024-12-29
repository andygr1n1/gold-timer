import type { ResultOf } from 'gql.tada'
import { fragment_notepadResponse } from './graphql/fragment_notepadResponse'

export type INotepad = ResultOf<typeof fragment_notepadResponse>
