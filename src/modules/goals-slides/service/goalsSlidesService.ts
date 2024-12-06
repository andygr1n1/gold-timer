export const goalsSlidesService = {
    instance: ['goalsSlidesService'],
    fetchGoalsSlides: (key: string) => [goalsSlidesService.instance, 'fetchGoalsSlides', key],
}
