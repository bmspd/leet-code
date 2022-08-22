function isPowerOfFour(n: number): boolean {
    if (n < 1) return false
    let base = Math.log(n) / Math.log(4)
    return (base^0) === base
}