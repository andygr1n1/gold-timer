import { IEditor$Schema } from '@/services/types'

export const achService = {
    instance: ['achService'],
    /*stores*/
    editor$Key: () => ['editor$Key'],
    editor$: <T>(selectFn: (data: IEditor$Schema) => T) => ({
        queryKey: achService.editor$Key(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { open: false, id: null, editorMode: null },
        select: selectFn,
    }),
    /*queries*/
    fetchAchsKey: (key: string) => [achService.instance, 'fetchAchsKey', key],
    fetchAchKey: (key: string | null) => [achService.instance, 'fetchAchKey', key],
}
