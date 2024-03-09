import React from 'react'
import type { SVGProps } from 'react'

export function IconUpload(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}>
                <path strokeDasharray={14} strokeDashoffset={14} d='M6 19h12'>
                    <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        begin='0.5s'
                        dur='0.4s'
                        values='14;0'
                    ></animate>
                </path>
                <path
                    strokeDasharray={18}
                    strokeDashoffset={18}
                    d='M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5'
                >
                    <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.4s' values='18;0'></animate>
                </path>
            </g>
        </svg>
    )
}
