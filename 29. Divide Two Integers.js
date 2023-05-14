/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0) return Infinity;
    if (dividend === 0) return 0;
    if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1;

    let isNegative = (dividend ^ divisor) < 0;
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let result = 0;

    if (dividend === -Math.pow(2, 31)) {
        if (divisor === -1) {
            return Math.pow(2, 31) - 1;
        } else if (divisor === 1) {
            return -Math.pow(2, 31);
        }
    }

    for (let i = 31; i >= 0; i--) {
        if ((absDividend >>> i) >= absDivisor) {
            result += 1 << i;
            absDividend -= absDivisor << i;
        }
    }

    return isNegative ? -result : result;
};