export const notepadService = {
    instance: 'notepadService',
    KEY_useFetchNotepad: (key: string) => [notepadService.instance, 'KEY_useFetchNotepad', key],
    KEY_useFetchLockedStatus: (key: string) => [notepadService.instance, 'KEY_useFetchLockedStatus', key],
}
