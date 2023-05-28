import { getParentOfType, types } from 'mobx-state-tree'
import { Link } from './Link.model'
import { Links$ } from './Links.store'

export const Link$ = types
    .compose(
        Link,
        types.model({
            related_links: types.array(Link),
        }),
    )
    .named('Task$')
    .views((self) => ({
        get isSelected(): boolean {
            const { selected_link } = getParentOfType(self, Links$)
            if (!selected_link) return false
            return selected_link.id === self.id
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
