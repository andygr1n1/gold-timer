import type { SVGProps } from 'react'

export function IconBlog(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 20 20' {...props}>
            <path fill='currentColor' d='M7 0a2 2 0 0 0-2 2h9a2 2 0 0 1 2 2v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'></path>
            <path
                fill='currentColor'
                d='M13 20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z'
            ></path>
        </svg>
    )
}
