

/*
 * Not optimal solution
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairsNotOptimal(k, arr) {
    
    let n = arr.length
    let tp = 0

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (Math.abs(arr[i] - arr[j]) == k) {
                tp++
            }
        }
    }

    return tp
}

/*
 * Optimal solution
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k, arr) {
    let tp = 0
    let uniq = new Set(arr)

    for (const v of arr) {
        if (uniq.has(v + k)) {
            tp++
        }
    }
    return tp
}

const in1 = [
    2, // k
    [1,5,3,4,2], //arr
    3 // solution
] 

const in2 = [
    1, // k
    [363374326,364147530,61825163,1073065718,1281246024,1399469912,428047635,491595254,879792181,1069262793], //arr
    0 // solution
] 

const in3 = [
    2, // k
    [1,3,5,8,6,4,2], //arr
    5 // solution
] 

console.log(pairs(in2[0], in2[1]))

tests([in1, in2, in3])

function tests(testCases) {

    let testFailed = 0
    for (const t of testCases) {
        if (pairs(t[0], t[1]) != t[2]) {
            testFailed++
            console.log("TEST CASE FAILED", t)
        }        
    }

    if (testFailed == 0) {
        console.log("All TESTS PASSED")
    }
}