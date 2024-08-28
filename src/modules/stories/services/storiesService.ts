export const storiesService = {
    instance: 'storiesService',
    /*queries*/
    // fetchAchsKey: (key: string) => [achService.instance, 'fetchAchsKey', key],
    fetchStories: (params: string) => ['storiesService', params],
}
