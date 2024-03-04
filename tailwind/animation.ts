export default {
    animation: {
        'spin-slow': 'spin 10s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'zoom-in-out': 'zoom-in-out 1.0s infinite',
        opacity: 'opacity 0.150s ease-in',
        'opacity-3': 'opacity 0.300s ease-in',
        'opacity-reverse-sm': 'opacity-reverse 0.300s ease-in',
        'opacity-reverse-xs': 'opacity-reverse 0.150s ease-in',
        'opacity-5': 'opacity 0.500s ease-in',
        // side menu
        'slide-in': 'slide-in 0.3s linear',
        'slide-out': 'slide-out 0.3s linear',
        'ping-bg': 'ping-bg 6s ease-in-out infinite ',
    },
    keyframes: {
        'ping-bg': {
            '0%': {
                opacity: '0.3',
                transform: 'scale(1)',
            },
            '50%': {
                opacity: '0.5',
                transform: 'scale(1.1)',
            },
            '100%': {
                opacity: '0.3',
                transform: 'scale(1)',
            },
        },
        wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
        },
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)',
            },
        },
        'zoom-in-out': {
            '0%': {
                transform: 'scale(1.0)',
            },
            '50%': {
                transform: 'scale(1.1)',
            },
            '100%': {
                transform: 'scale(1.0)',
            },
        },
        opacity: {
            '0%': {
                opacity: '0',
            },
            '100%': {
                opacity: '1',
            },
        },
        'opacity-reverse': {
            '0%': {
                opacity: '1',
            },
            '100%': {
                opacity: '0',
            },
        },
        // side menu
        'slide-in': {
            '0%': { margin: '0 0 0 -320px' },
            '100%': { margin: '0' },
        },
        'slide-out': {
            '0%': { margin: '0' },
            '100%': { margin: '0 0 0 -320px' },
        },
    },
}
