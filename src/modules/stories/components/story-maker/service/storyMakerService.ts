export const storyMakerService = {
    instance: 'storyMakerService',
    useFetchStoryInfo: (params: unknown) => [storyMakerService.instance, 'useFetchStoryInfo', params?.toString()],
    useFetchStoryMessages: (params: unknown) => [
        storyMakerService.instance,
        'useFetchStoryMessages',
        params?.toString(),
    ],
}
