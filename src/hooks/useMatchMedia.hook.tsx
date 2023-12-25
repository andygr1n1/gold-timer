import { useState, useLayoutEffect } from 'react'

enum MEDIA_QUERY_KEYS_ENUM {
    IS_MOBILE = 'isMobile',
    IS_TABLET = 'isTablet',
    IS_DESKTOP = 'isDesktop',
    IS_LARGE_DESKTOP = 'isLargeDesktop',
}

export enum MEDIA_QUERY_VALUES_ENUM {
    IS_MOBILE = '(max-width: 766px)',
    IS_TABLET = '(min-width: 767px) and (max-width: 1023px)',
    // IS_DESKTOP = '(min-width: 1024px) and (max-width: 1279px)',
    IS_DESKTOP = '(min-width: 1024px)',
    IS_LARGE_DESKTOP = '(min-width: 1280px)',
}

const MediaQuery = {
    isMobile: MEDIA_QUERY_VALUES_ENUM.IS_MOBILE,
    isTablet: MEDIA_QUERY_VALUES_ENUM.IS_TABLET,
    isDesktop: MEDIA_QUERY_VALUES_ENUM.IS_DESKTOP,
    isLargeDesktop: MEDIA_QUERY_VALUES_ENUM.IS_LARGE_DESKTOP,
}

/**
 * const { isMobile } = useWindowMatchMedia(['isMobile'])
 *
 * const { isDesktop, isMobile, isTablet } = useWindowMatchMedia()
 *
 *
 */
export const useWindowMatchMedia = (media?: (keyof typeof MediaQuery)[]) => {
    let queries: MEDIA_QUERY_VALUES_ENUM[] = []
    const media_devices: (keyof typeof MediaQuery)[] = []

    if (media) {
        media.forEach((m) => {
            switch (m) {
                case MEDIA_QUERY_KEYS_ENUM.IS_MOBILE:
                    queries.push(MEDIA_QUERY_VALUES_ENUM.IS_MOBILE)
                    media_devices.push(m)
                    return
                case MEDIA_QUERY_KEYS_ENUM.IS_TABLET:
                    queries.push(MEDIA_QUERY_VALUES_ENUM.IS_TABLET)
                    media_devices.push(m)
                    return
                case MEDIA_QUERY_KEYS_ENUM.IS_DESKTOP:
                    queries.push(MEDIA_QUERY_VALUES_ENUM.IS_DESKTOP)
                    media_devices.push(m)
                    return
                case MEDIA_QUERY_KEYS_ENUM.IS_LARGE_DESKTOP:
                    queries.push(MEDIA_QUERY_VALUES_ENUM.IS_LARGE_DESKTOP)
                    media_devices.push(m)
                    return
            }
        })
    } else {
        queries = [
            MEDIA_QUERY_VALUES_ENUM.IS_MOBILE,
            MEDIA_QUERY_VALUES_ENUM.IS_TABLET,
            MEDIA_QUERY_VALUES_ENUM.IS_DESKTOP,
            MEDIA_QUERY_VALUES_ENUM.IS_LARGE_DESKTOP,
        ]
    }

    const mediaQueryLists = queries.map((query) => matchMedia(query))
    const getValues = () => mediaQueryLists.map((mql) => mql.matches)

    const [values, setValues] = useState(getValues)

    useLayoutEffect(() => {
        const handler = () => setValues(getValues)

        mediaQueryLists.forEach((mq) => mq.addEventListener('change', handler))

        return () => mediaQueryLists.forEach((mq) => mq.removeEventListener('change', handler))
    })

    const QueryObject = media_devices.reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {} as typeof MediaQuery,
    )

    return QueryObject
}
