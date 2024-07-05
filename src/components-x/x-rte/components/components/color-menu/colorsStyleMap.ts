import { IColorStyleMap } from '../../../types'

export const colorStyleMap: IColorStyleMap = {
    RED_TAILWIND: { color: '#ef4444' }, // Tailwind Red 500
    YELLOW_TAILWIND: { color: '#f59e0b' }, // Tailwind Yellow 500
    GREEN_TAILWIND: { color: '#10b981' }, // Tailwind Green 500
    BLUE_TAILWIND: { color: '#3b82f6' }, // Tailwind Blue 500
    INDIGO: { color: '#6366f1' }, // Tailwind Indigo 500
    PURPLE_TAILWIND: { color: '#8b5cf6' }, // Tailwind Purple 500
    PINK: { color: '#ec4899' }, // Tailwind Pink 500
    GRAY_300: { color: '#d1d5db' }, // Tailwind Gray 300
    GRAY_400: { color: '#9ca3af' }, // Tailwind Gray 400
    GRAY_500: { color: '#6b7280' }, // Tailwind Gray 500
    GRAY_600: { color: '#4b5563' }, // Tailwind Gray 600
    GRAY_700: { color: '#374151' }, // Tailwind Gray 700
    GRAY_800: { color: '#1f2937' }, // Tailwind Gray 800
    GRAY_900: { color: '#111827' }, // Tailwind Gray 900
    RED_300: { color: '#fca5a5' }, // Tailwind Red 300
    RED_400: { color: '#f87171' }, // Tailwind Red 400
    RED_500: { color: '#ef4444' }, // Tailwind Red 500
    RED_600: { color: '#dc2626' }, // Tailwind Red 600
    RED_700: { color: '#b91c1c' }, // Tailwind Red 700
    RED_800: { color: '#991b1b' }, // Tailwind Red 800
    RED_900: { color: '#7f1d1d' }, // Tailwind Red 900
    YELLOW_300: { color: '#fde68a' }, // Tailwind Yellow 300
    YELLOW_400: { color: '#fbbf24' }, // Tailwind Yellow 400
    YELLOW_500: { color: '#f59e0b' }, // Tailwind Yellow 500
    YELLOW_600: { color: '#d97706' }, // Tailwind Yellow 600
    YELLOW_700: { color: '#b45309' }, // Tailwind Yellow 700
    YELLOW_800: { color: '#92400e' }, // Tailwind Yellow 800
    YELLOW_900: { color: '#78350f' }, // Tailwind Yellow 900
    GREEN_300: { color: '#6ee7b7' }, // Tailwind Green 300
    GREEN_400: { color: '#34d399' }, // Tailwind Green 400
    GREEN_500: { color: '#10b981' }, // Tailwind Green 500
    GREEN_600: { color: '#059669' }, // Tailwind Green 600
    GREEN_700: { color: '#047857' }, // Tailwind Green 700
    GREEN_800: { color: '#065f46' }, // Tailwind Green 800
    GREEN_900: { color: '#064e3b' }, // Tailwind Green 900
    BLUE_300: { color: '#93c5fd' }, // Tailwind Blue 300
    BLUE_400: { color: '#60a5fa' }, // Tailwind Blue 400
    BLUE_500: { color: '#3b82f6' }, // Tailwind Blue 500
    BLUE_600: { color: '#2563eb' }, // Tailwind Blue 600
    BLUE_700: { color: '#1d4ed8' }, // Tailwind Blue 700
    BLUE_800: { color: '#1e40af' }, // Tailwind Blue 800
    BLUE_900: { color: '#1e3a8a' }, // Tailwind Blue 900
    INDIGO_300: { color: '#a5b4fc' }, // Tailwind Indigo 300
    INDIGO_400: { color: '#818cf8' }, // Tailwind Indigo 400
    INDIGO_500: { color: '#6366f1' }, // Tailwind Indigo 500
    INDIGO_600: { color: '#4f46e5' }, // Tailwind Indigo 600
    INDIGO_700: { color: '#4338ca' }, // Tailwind Indigo 700
    INDIGO_800: { color: '#3730a3' }, // Tailwind Indigo 800
    INDIGO_900: { color: '#312e81' }, // Tailwind Indigo 900
    PURPLE_300: { color: '#c4b5fd' }, // Tailwind Purple 300
    PURPLE_400: { color: '#a78bfa' }, // Tailwind Purple 400
    PURPLE_500: { color: '#8b5cf6' }, // Tailwind Purple 500
    PURPLE_600: { color: '#7c3aed' }, // Tailwind Purple 600
    PURPLE_700: { color: '#6d28d9' }, // Tailwind Purple 700
    PURPLE_800: { color: '#5b21b6' }, // Tailwind Purple 800
    PURPLE_900: { color: '#4c1d95' }, // Tailwind Purple 900
    PINK_300: { color: '#f9a8d4' }, // Tailwind Pink 300
    PINK_400: { color: '#f472b6' }, // Tailwind Pink 400
    PINK_500: { color: '#ec4899' }, // Tailwind Pink 500
    PINK_600: { color: '#db2777' }, // Tailwind Pink 600
    PINK_700: { color: '#be185d' }, // Tailwind Pink 700
    PINK_800: { color: '#9d174d' }, // Tailwind Pink 800
    PINK_900: { color: '#831843' }, // Tailwind Pink 900
    DEFAULT: { color: 'var(--colors-cText)' },
    CUSTOM: { color: '' }, // Placeholder for custom colors
}

export const colorKeys = () => {
    const keys = Object.keys(colorStyleMap).map((key) => ({ color: key, hex: colorStyleMap[key].color }))
    return keys.slice(0, -2)
}

export const baseColorKeys = () => {
    return colorKeys().slice(0, 7)
}

export const secondaryColorKeys = () => {
    const keys = Object.keys(colorStyleMap).map((key) => ({ color: key, hex: colorStyleMap[key].color }))
    return colorKeys().slice(7, keys.length)
}
