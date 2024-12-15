export const filterWordsOptimizer = (word?: string | null, filter?: string | null): boolean => {
    const _word = word || ''
    const _filter = filter || ''
    return _word.trim().toLowerCase().includes(_filter.trim().toLowerCase())
}
