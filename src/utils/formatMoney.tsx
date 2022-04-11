export function currencyPrice(str: any) {
    return str.split('').reverse().reduce((prev: any, next: any, index: any) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}