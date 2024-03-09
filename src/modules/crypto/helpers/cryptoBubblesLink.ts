export const cryptoBubblesLink = () =>
    'https://cryptobubbles.net#currencies=52,74,131,1839,1975,2424,5426,5805,6636,8916,9481,10603,11840,11841,19843,20947,21794,28298'

export const cryptoBubblesCount = (): number => {
    const link = cryptoBubblesLink()

    const currencies = link.split('=')[1]
    const currenciesNumbers = currencies.split(',').length

    return currenciesNumbers
}
