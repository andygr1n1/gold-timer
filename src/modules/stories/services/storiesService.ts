export const storiesService = {
    instance: 'storiesService',
    /*queries*/
    // fetchAchsKey: (key: string) => [achService.instance, 'fetchAchsKey', key],
    fetchStories: (params: unknown) => ['storiesService', params],
    fetchStory: (params: unknown) => ['storiesService', params],
}
