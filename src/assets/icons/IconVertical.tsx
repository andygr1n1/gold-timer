import type { SVGProps } from 'react'

export function IconVertical(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <path
                fill='none'
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth={3.75}
                d='M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z'
            ></path>
        </svg>
    )
}
