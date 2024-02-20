// @ts-nocheck
import type { SVGProps } from 'react'

export function IconFocus(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth={2}>
                <path
                    strokeDasharray={56}
                    strokeDashoffset={56}
                    d='M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z'
                >
                    <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.5s' values='56;0'></animate>
                </path>
                <path d='M12 4v0M20 12h0M12 20v0M4 12h0' opacity={0}>
                    <set attributeName='opacity' begin='0.9s' to={1}></set>
                    <animate
                        fill='freeze'
                        attributeName='d'
                        begin='0.9s'
                        dur='0.2s'
                        values='M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2'
                    ></animate>
                </path>
            </g>
            <circle cx={12} cy={12} r={0} fill='currentColor' fillOpacity={0}>
                <set attributeName='fill-opacity' begin='0.6s' to={1}></set>
                <animate fill='freeze' attributeName='r' begin='0.6s' dur='0.2s' values='0;4'></animate>
            </circle>
        </svg>
    )
}
