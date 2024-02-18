import React from 'react'
import type { SVGProps } from 'react'

export function IconAvatar(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 36 36' {...props}>
            <path
                fill='currentColor'
                d='M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7m0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5'
                className='clr-i-outline clr-i-outline-path-1'
            ></path>
            <path
                fill='currentColor'
                d='M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z'
                className='clr-i-outline clr-i-outline-path-2'
            ></path>
            <path fill='none' d='M0 0h36v36H0z'></path>
        </svg>
    )
}
