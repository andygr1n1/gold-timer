import type { SVGProps } from 'react'

export function IconExpired(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth={2}>
                <path
                    strokeDasharray={60}
                    strokeDashoffset={60}
                    d='M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z'
                >
                    <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.5s' values='60;0'></animate>
                </path>
                <path strokeDasharray={8} strokeDashoffset={8} d='M12 7V13'>
                    <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        begin='0.6s'
                        dur='0.2s'
                        values='8;0'
                    ></animate>
                    <animate
                        attributeName='stroke-width'
                        begin='1s'
                        dur='3s'
                        keyTimes='0;0.1;0.2;0.3;1'
                        repeatCount='indefinite'
                        values='2;3;3;2;2'
                    ></animate>
                </path>
            </g>
            <circle cx={12} cy={17} r={1} fill='currentColor' fillOpacity={0}>
                <animate fill='freeze' attributeName='fill-opacity' begin='0.8s' dur='0.4s' values='0;1'></animate>
                <animate
                    attributeName='r'
                    begin='1.3s'
                    dur='3s'
                    keyTimes='0;0.1;0.2;0.3;1'
                    repeatCount='indefinite'
                    values='1;2;2;1;1'
                ></animate>
            </circle>
        </svg>
    )
}
