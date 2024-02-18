import type { SVGProps } from 'react'

export function IconReact(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 48 48' {...props}>
            <g
                fill='none'
                fillRule='evenodd'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={4}
                clipRule='evenodd'
            >
                <path d='M24 45c3.22 0 8.728-4.2 8.728-21S27.22 3 24 3c-3.22 0-8.727 4.483-8.727 21S20.78 45 24 45'></path>
                <path d='M5.105 35c1.61 2.812 8.143 5.421 23.259-3.379s16.142-15.809 14.531-18.62c-1.61-2.813-8.397-5.274-23.258 3.378C4.775 25.031 3.495 32.188 5.105 35'></path>
                <path d='M5.105 13c-1.61 2.812-.585 9.821 14.532 18.621c15.116 8.8 21.648 6.191 23.258 3.38c1.61-2.813.33-9.97-14.531-18.622C13.502 7.727 6.715 10.188 5.105 13'></path>
            </g>
        </svg>
    )
}
