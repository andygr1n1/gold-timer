import { extractTextFromHtml } from '@/functions/extractTextFromHtml'
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
        deleted_at: types.maybeNull(
            types.snapshotProcessor(types.maybeNull(types.Date), {
                preProcessor: (sn: Date | undefined | string) => {
                    if (!sn) {
                        return null
                    }
                    if (typeof sn === 'string') {
                        return new Date(sn)
                    }
                    return sn
                },
            }),
        ),
        archived: types.maybeNull(types.boolean),
    })
    .views((self) => ({
        get noteTags(): string[] {
            return compact(self.tag.split(','))
        },
        get descriptionLength(): boolean {
            return !!extractTextFromHtml(self.description).length
        },
    }))
