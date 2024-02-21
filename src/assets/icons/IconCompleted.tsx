import type { SVGProps } from 'react'

export function IconCompleted(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}>
                <circle cx={12} cy={12} r={9}></circle>
                <path strokeDasharray={14} strokeDashoffset={14} d='M8 12L11 15L16 10'>
                    <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='14;0'></animate>
                </path>
            </g>
        </svg>
    )
}
