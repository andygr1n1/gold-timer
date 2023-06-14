export const getCodeFromUrlParams = (): string => {
    const url = new URL(globalThis.location.href)

    const code = url.searchParams.get('code')

    return code || ''
}
