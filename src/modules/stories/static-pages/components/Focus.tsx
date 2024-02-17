export const Focus: React.FC<{ text: string }> = ({ text }) => {
    return <span className='mx-1 text-2xl font-bold text-teal-500'>{text}</span>
}

export const GoldenFocus: React.FC<{ text: string }> = ({ text }) => {
    return <span className='mx-1 text-2xl font-bold uppercase text-yellow-400 '>{text}</span>
}
