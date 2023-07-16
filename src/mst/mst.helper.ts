import { types } from 'mobx-state-tree'

export const generateMstId = () =>
    types.snapshotProcessor(types.identifier, {
        preProcessor(sn: string | undefined) {
            if (!sn) return crypto.randomUUID()

            return sn
        },
    })
