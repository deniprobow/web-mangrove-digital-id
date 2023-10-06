export const FormatDate = (value:string) => {
    return value.split('T')[0].split('-').reverse().join('-')
}