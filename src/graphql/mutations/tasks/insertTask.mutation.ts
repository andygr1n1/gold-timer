import { generateClient } from '@/graphql/client'
import { processError } from '@/helpers/processError.helper'
import { INote, INote$ } from '@/mst/types'
import { gql } from 'graphql-request'

export const insertTask = async (newTask: INote): Promise<INote$ | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation insert_tasks_one($newTask: tasks_insert_input!) {
            insert_tasks_one(object: $newTask) {
                id
                description
                tag
                created_at
            }
        }
    `

    try {
        const response = await client.request(mutation, { newTask })

        return response.insert_tasks_one
    } catch (e) {
        processError(e, 'insertTask error')
        return
    }
}
