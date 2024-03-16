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

export function IconCompletedFilled(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 2048 2048' {...props}>
            <path
                fill='currentColor'
                d='M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z'
            ></path>
        </svg>
    )
}
