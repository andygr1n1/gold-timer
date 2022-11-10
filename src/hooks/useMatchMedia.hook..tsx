import { useState, useLayoutEffect } from 'react'

export const useWindowMatchMedia = () => {
    const queries = [
        '(max-width: 766px)',
        '(min-width: 767px) and (max-width: 1199px)',
        '(min-width: 1200px) and (max-width: 1920px)',
    ]

    const mediaQueryLists = queries.map((query) => matchMedia(query))
    const getValues = () => mediaQueryLists.map((mql) => mql.matches)

    const [values, setValues] = useState(getValues)

    useLayoutEffect(() => {
        const handler = () => setValues(getValues)

        mediaQueryLists.forEach((mq) => mq.addEventListener('change', handler))

        return () => mediaQueryLists.forEach((mq) => mq.removeEventListener('change', handler))
    })

    console.log('values', values)

    return {
        isMobile: values[0],
        isTablet: values[1],
        isDesktop: values[2],
    }
}

export const useElementMatchMedia = () => console.log('useElementMatchMedia')
