/* window url */
const wurl = (searchParam: string) => new URL(globalThis.location.href).searchParams.get(searchParam)

export const getParam_Code = () => wurl('email')

export const getParam_Email = () => wurl('email')

export const getParam_Activation = () => wurl('activation')
