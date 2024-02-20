import Snowfall from 'react-snowfall'

export const SnowfallAnimation: React.FC = () => {
    return (
        <Snowfall
            snowflakeCount={10}
            style={{ zIndex: 9999999, opacity: 5, position: 'fixed', width: '100vw', height: '100vh' }}
        />
    )
}
