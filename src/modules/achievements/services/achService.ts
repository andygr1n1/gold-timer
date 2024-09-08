export const achService = {
    instance: ['achService'],
    fetchAchsKey: (key: string) => [achService.instance, 'fetchAchsKey', key],
    fetchAchKey: (key: string | null) => [achService.instance, 'fetchAchKey', key],
}
