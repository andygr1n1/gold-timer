import type { SVGProps } from 'react'

export function IconCheck(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}>
                <rect width={18} height={18} x={3} y={3} rx={4}></rect>
                <path d='m9 12l2.25 2L15 10'></path>
            </g>
        </svg>
    )
}
