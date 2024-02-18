import type { SVGProps } from 'react'

export function IconConfirmCircle(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}>
                <path
                    strokeDasharray={60}
                    strokeDashoffset={60}
                    d='M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'
                >
                    <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.5s' values='60;0'></animate>
                </path>
                <path strokeDasharray={14} strokeDashoffset={14} d='M8 12L11 15L16 10'>
                    <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        begin='0.6s'
                        dur='0.2s'
                        values='14;0'
                    ></animate>
                </path>
            </g>
        </svg>
    )
}
