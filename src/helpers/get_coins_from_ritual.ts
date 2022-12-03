// Ритуалы также будут иметь **систему бонусов**. Бонусы будут начисляться в зависимости от уровня ритуала:

// 1. начало ритуала = 10 бонусов
// 2. 1-10 уровень ритуала = 10 бонусов
// 3. 11-30 урочень ритуала = 20 бонусов
// 4. 30 - 60 уровень ритуала = 30 бонусов
// 5. 60-100 уровень ритуала = 40 бонусов
// 6. 100+ уровень ритуала = 50 бонусов

export const getCoinsFromRitual = (power: number, currentCoins: number): number => {
    if (power <= 10) {
        return currentCoins + 10
    } else if (power <= 30) {
        return currentCoins + 20
    } else if (power <= 60) {
        return currentCoins + 30
    } else if (power <= 100) {
        return currentCoins + 40
    } else if (power > 100) {
        return currentCoins + 50
    } else if (power >= 200) {
        return currentCoins + 100
    } else if (power >= 300) {
        return currentCoins + 150
    } else if (power >= 400) {
        return currentCoins + 200
    } else if (power >= 500) {
        return currentCoins + 250
    }

    return 10 + currentCoins
}
