export const cryptoBubblesLink = () =>
    'https://cryptobubbles.net#currencies=1,52,74,1027,1839,1975,2424,3773,3911,4030,5426,5690,5805,6636,7533,8000,8916,9481,10223,10603,10804,11840,11841,19843,20009,20396,20947,21794,23756,28298,28778,28846'

export const cryptoBubblesCount = (): number => {
    const link = cryptoBubblesLink()

    const currencies = link.split('=')[1]
    const currenciesNumbers = currencies.split(',').length

    return currenciesNumbers
}
