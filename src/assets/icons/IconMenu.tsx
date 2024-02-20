import type { SVGProps } from 'react'

export function IconMenu(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <g
                fill='none'
                stroke='currentColor'
                strokeDasharray={24}
                strokeDashoffset={24}
                strokeLinecap='round'
                strokeWidth={2}
            >
                <path d='M5 5H19'>
                    <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='24;0'></animate>
                </path>
                <path d='M5 12H19'>
                    <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        begin='0.2s'
                        dur='0.2s'
                        values='24;0'
                    ></animate>
                </path>
                <path d='M5 19H19'>
                    <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        begin='0.4s'
                        dur='0.2s'
                        values='24;0'
                    ></animate>
                </path>
            </g>
        </svg>
    )
}
