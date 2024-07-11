import type { SVGProps } from 'react'

export function IconCode(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16'
            ></path>
        </svg>
    )
}
