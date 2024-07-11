import { compact } from 'lodash-es'

export const getNoteTags = (tag: string | null) => {
    const noteTags = compact(tag?.split(','))

    return { noteTags: !tag?.length ? [] : noteTags }
}

//   toggleSelectTag(tag: string): void {
//             if (self.selected_tags.includes(tag)) {
//                 const indexOfActiveFilter = self.selected_tags.indexOf(tag)
//                 self.selected_tags.splice(indexOfActiveFilter, 1)
//             } else {
//                 self.selected_tags.push(tag)
//             }
//         },
