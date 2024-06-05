export const myCounter = () => {
    let count = 0
    return () => count++
}