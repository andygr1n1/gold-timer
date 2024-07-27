import Snowfall from 'react-snowfall'

export const SnowfallAnimation: React.FC = () => {
    const colors = [
        // 'snow',
        // '#FF69B4', // Hot Pink
        // '#FF85C1', // Lighter Hot Pink
        // '#FF4DA6', // Darker Hot Pink
        // '#1E90FF', // Dodger Blue
        'rgba(30, 144, 255, 0.2)', // Dodger Blue
        // '#4AA3FF', // Lighter Dodger Blue
        'rgba(74, 163, 255, 0.2)', // Lighter Dodger Blue
        // '#0068D9', // Darker Dodger Blue
        'rgba(0, 104, 217, 0.2)', // Darker Dodger Blue
        // '#00CED1', // Dark Turquoise
        // 'rgba(0, 206, 209, 0.5)', // Dark Turquoise
        // '#33D6D8', // Lighter Dark Turquoise
        // 'rgba(51, 214, 216, 0.5)', // Lighter Dark Turquoise
        // '#009DA1', // Darker Dark Turquoise
        // 'rgba(0, 157, 161, 0.5)', // Darker Dark Turquoise
    ]

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }

    return (
        <Snowfall
            color={getRandomColor()} // Example color: Hot Pink
            snowflakeCount={10}
            style={{ zIndex: 9999999, opacity: 5, position: 'fixed', width: '100vw', height: '100vh' }}
        />
    )
}
