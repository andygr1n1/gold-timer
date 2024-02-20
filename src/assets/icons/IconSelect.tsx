import type { SVGProps } from 'react'

export function IconSelect(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <path
                fill='currentColor'
                d='M12 4a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L12 6.414L8.707 9.707a1 1 0 0 1-1.414-1.414l4-4A1 1 0 0 1 12 4M7.293 14.293a1 1 0 0 1 1.414 0L12 17.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414'
            ></path>
        </svg>
    )
}
