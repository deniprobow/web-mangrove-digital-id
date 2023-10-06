export const FormatNumber = (value:number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}