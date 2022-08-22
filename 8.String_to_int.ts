function myAtoi(s: string): number {
    let res = parseInt(s)
    if (res < -2147483648) res = -2147483648
    else if (res > 2147483647) res = 2147483647
    return isNaN(res) ? 0 : res
};