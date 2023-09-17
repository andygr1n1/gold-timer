import { compact } from 'lodash-es'
import { types } from 'mobx-state-tree'

export const Note = types
    .model('Note', {
        id: types.snapshotProcessor(types.identifier, {
            preProcessor(sn: string | undefined) {
                if (!sn) return crypto.randomUUID()

                return sn
            },
        }),
        owner_id: '',
        description: '',
        tag: '',
    })
    .views((self) => ({
        get noteTags(): string[] {
            return compact(self.tag.split(','))
        },
    }))
