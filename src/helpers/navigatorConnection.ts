const browserNavigator = navigator as Navigator & {
    connection: { effectiveType: string }
    mozConnection: { effectiveType: string }
    webkitConnection: { effectiveType: string }
}

export const browserNavigatorConnection = (): string => {
    const connection =
        browserNavigator?.connection || browserNavigator?.mozConnection || browserNavigator?.webkitConnection
    return connection?.effectiveType || ''
}

export const is4G = (): boolean => {
    return browserNavigatorConnection() === '4g'
}
