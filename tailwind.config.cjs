/** @type {import('tailwindcss').Config} */
const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.sans],
            mono: ['Cascadia Code', defaultConfig.theme.fontFamily.mono],
            monoIitalic: ['Cascadia Mono Italic', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            colors: {
                skyblue: 'var(--skyblue)',
                spaceblue: 'var(--spaceblue)',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
                'fade-in-down': 'fade-in-down 1s ease-out',
                'zoom-in-out': 'zoom-in-out 1.0s infinite',
                opacity: 'opacity 0.150s ease-in',
            },
            keyframes: {
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
            },
        },
    },
    plugins: [],
}
