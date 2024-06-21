export const extractTextFromHtml = (text: string): string => {
    return new DOMParser().parseFromString(text.trim() || '', 'text/html').body.textContent || ''
}
