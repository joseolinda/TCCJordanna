const getNthPrime = (n) => {
    let count = 0
    let i = 2
    while (count < n) {
        let isPrime = true
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            count++
        }
        i++
    }
    return i - 1
}


export default getNthPrime