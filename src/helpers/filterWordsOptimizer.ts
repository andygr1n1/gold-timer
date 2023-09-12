export const filterWordsOptimizer = (word: string, filter: string): boolean => {
    return word.trim().toLowerCase().includes(filter.trim().toLowerCase())
}
