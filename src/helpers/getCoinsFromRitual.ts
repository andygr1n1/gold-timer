export const getCoinsFromRitual = (power: number, currentCoins: number): number => {
    if (power <= 10) {
        return currentCoins + 10 + power
    } else if (power <= 30) {
        return currentCoins + 20 + power
    } else if (power <= 60) {
        return currentCoins + 30 + power
    } else if (power <= 100) {
        return currentCoins + 40 + power
    } else if (power <= 365) {
        return currentCoins + 50 + power
    } else if (power <= 731) {
        return currentCoins + 100 + power
    } else if (power <= 1097) {
        return currentCoins + 150 + power
    } else if (power <= 1464) {
        return currentCoins + 250 + power
    } else if (power <= 1829) {
        return currentCoins + 500 + power
    } else if (power > 1829) {
        return currentCoins + 1000 + power
    }

    return 10 + currentCoins
}
