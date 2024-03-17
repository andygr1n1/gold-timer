import type { SVGProps } from 'react'

export function IconAvatar(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 36 36' {...props}>
            <path
                fill='currentColor'
                d='M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.51 1.51 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.51 1.51 0 0 0-.39-.98'
                className='clr-i-solid clr-i-solid-path-1'
            ></path>
            <circle cx={18} cy={10} r={7} fill='currentColor' className='clr-i-solid clr-i-solid-path-2'></circle>
            <path fill='none' d='M0 0h36v36H0z'></path>
        </svg>
    )
}
