export enum MONTHS_ENUM {
    JANUARY = 'January',
    FEBRUARY = 'February',
    MARCH = 'March',
    APRIL = 'April',
    MAY = 'May',
    JUNE = 'June',
    JULY = 'July',
    AUGUST = 'August',
    SEPTEMBER = 'September',
    OCTOBER = 'October',
    NOVEMBER = 'November',
    DECEMBER = 'December',
}

export const getMonthNumber = (month: MONTHS_ENUM | string | undefined): number => {
    switch (month) {
        case MONTHS_ENUM.JANUARY:
            return 1
        case MONTHS_ENUM.FEBRUARY:
            return 2
        case MONTHS_ENUM.MARCH:
            return 3
        case MONTHS_ENUM.APRIL:
            return 4
        case MONTHS_ENUM.MAY:
            return 5
        case MONTHS_ENUM.JUNE:
            return 6
        case MONTHS_ENUM.JULY:
            return 7
        case MONTHS_ENUM.AUGUST:
            return 8
        case MONTHS_ENUM.SEPTEMBER:
            return 9
        case MONTHS_ENUM.OCTOBER:
            return 10
        case MONTHS_ENUM.NOVEMBER:
            return 11
        case MONTHS_ENUM.DECEMBER:
            return 12
        default:
            return 1
    }
}
