

/*
  *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    
    let sumLeftToRight = [arr[0]]
    let sumRightToLeft = new Array(arr.length).fill(0)
    sumRightToLeft[arr.length - 1] = arr[arr.length - 1]

    let count1 = 1
    let count2 = arr.length - 2

    while (count1 < arr.length && count2 >= 0) {
        sumLeftToRight.push(sumLeftToRight[count1 - 1] + arr[count1]) 

        sumRightToLeft[count2] = sumRightToLeft[count2 + 1] + arr[count2]
        count1++
        count2--
    }    
    
    for (let i = 0; i < arr.length; i++) {
        const sumLeft = sumLeftToRight[i - 1] ?? 0
        const sumRight = sumRightToLeft[i + 1] ?? 0

        if (sumLeft == sumRight) {
            return "YES"
        }
    }


    return "NO"
}


const inputs = [
    [[1,2,3], "NO"],
    [[1,2,3,3], "YES"],
    [[1,1,4,1,1], "YES"],
    [[2,0,0,0], "YES"],
    [[0,0,2,0], "YES"]
]


const test = (testCases) => {

    let testFailed = false
    for (const t of testCases) {
        const result = balancedSums(t[0]) 
        if (result != t[1]) {
            console.log(`TEST FAILED, WAITING ${t[1]} GOT ${result}`)
            testFailed = true
        }
    }

    if (!testFailed) {
        console.log("ALL TESTS PASSED")
    }
}

test(inputs)