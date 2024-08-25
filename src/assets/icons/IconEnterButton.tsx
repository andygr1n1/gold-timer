import type { SVGProps } from 'react'

export function IconEnterButton(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 48 48' {...props}>
            <defs>
                <mask id='ipTEnterKey0'>
                    <g fill='none' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth={4}>
                        <path fill='#555' d='M44 44V4H24v16H4v24z'></path>
                        <path d='m21 28l-4 4l4 4'></path>
                        <path d='M34 23v9H17'></path>
                    </g>
                </mask>
            </defs>
            <path fill='currentColor' d='M0 0h48v48H0z' mask='url(#ipTEnterKey0)'></path>
        </svg>
    )
}
