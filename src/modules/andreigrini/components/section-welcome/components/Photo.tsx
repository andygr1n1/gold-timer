export const Photo: React.FC = () => {
    return (
        <div className='rounded-full relative transparent mt-40 lg:mt-20 xl:w-[300px] h-[300px]'>
            <img
                className='absolute-center h-[300px] xl:h-[500px]'
                src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}/portfolio/ag-lux3.png`}
                alt='Andrei Grini'
            />
        </div>
    )
}
