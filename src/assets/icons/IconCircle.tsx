import React from 'react'
import type { SVGProps } from 'react'

export function IconCircle(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 16 16' {...props}>
            <path fill='currentColor' d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0'></path>
        </svg>
    )
}
