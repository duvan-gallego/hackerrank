/*
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function legoBlocks(n, m) {

    var mod = BigInt(Math.pow(10, 9) + 7);
    var oneFloor = [];
    var dirtyMultiFloor = [];
    var cleanMultiFloor = [];

    oneFloor = [0n, 1n, 2n, 4n, 8n];

    for (let width = 1; width <= m; width++) {
        if (width > 4) {
            oneFloor[width] =
                (oneFloor[width - 1] +
                    oneFloor[width - 2] +
                    oneFloor[width - 3] +
                    oneFloor[width - 4]) %
                mod;
        }

        dirtyMultiFloor[width] = 1n;
        for (let k = 0; k < n; k++) {
            dirtyMultiFloor[width] *= oneFloor[width];
            dirtyMultiFloor[width] %= mod;
        }
    }

    for (let width = 1; width <= m; width++) {
        cleanMultiFloor[width] = dirtyMultiFloor[width] + mod;
        for (let k = 1; k < width; k++) {
            cleanMultiFloor[width] -=
                (cleanMultiFloor[k] * dirtyMultiFloor[width - k]) % mod;
            cleanMultiFloor[width] += mod;
        }
    }

    return cleanMultiFloor[m] % mod;

}

console.log(legoBlocks(10,8))