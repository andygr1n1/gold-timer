import { observer } from 'mobx-react-lite'

export const AgLogo: React.FC = observer(() => {
    return (
        <img height={100} className='m-4' src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/portfolio/ag-logo.webp`} />
    )
})
