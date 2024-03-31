import { useState, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom' // Using react-router-dom v5 for demonstration

export const useQueryParams = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Parse the search string into a URLSearchParams object
    const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search))

    // Function to update the search params
    const setQueryParam = useCallback(
        (key: string, value: string) => {
            const newSearchParams = new URLSearchParams(searchParams)

            if (value === null || value === undefined) {
                newSearchParams.delete(key) // Remove the param if the value is nullish
            } else {
                newSearchParams.set(key, value) // Set or update the param
            }

            setSearchParams(newSearchParams)

            // Navigate without changing the path, but update the search params
            navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true })
        },
        [history, location.pathname, searchParams],
    )

    return { searchParams, setQueryParam }
}
