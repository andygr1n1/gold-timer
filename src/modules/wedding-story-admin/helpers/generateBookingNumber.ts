export const generateBookingNumber = (): string => {
    const array = new Uint8Array(5)
    crypto.getRandomValues(array)
    return Array.from(array, (byte) => ('0' + (byte % 36).toString(36)).slice(-1).toUpperCase()).join('')
}
