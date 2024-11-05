

/* 
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {

    if (s.length == 0) return "NO"    

    let mapString = {}    

    for (const l of s) {
        if (mapString[l]) {                                                  
            mapString[l]++                         
        } else {
            mapString[l] = 1
        }
    }
            
    // Find element with more frequency
    let numCount = {}    
    let allFreq = new Set()
    for (const [_, value] of Object.entries(mapString)) {
        if (numCount[value]) {
            numCount[value]++
        } else {
            numCount[value] = 1            
        }
        allFreq.add(value)
    }

    if (allFreq.size == 1) return "YES"

    let twoFrequencies = allFreq.size === 2;
    let [a, b] = allFreq;
 

    // frequency occurs only once
    let oneOccurence = numCount[a] === 1 || numCount[b] === 1;


    // the difference is a singleton character
    // e.g. abbcc
    let singleton = (numCount[a] === 1 && a === 1) || (numCount[b] === 1 && b === 1)

    // differing frequency is exactly 1 more than others
    // e.g. true if aaabbcc, false if abbcc
    let diffOfOne = (numCount[a] === 1 ? a - b : b - a) === 1;


    // if single character or frequencies differ by one
    // and there are exactly two frequencies
    // and there is only one occurence of the singleton or differing frequency
    if ((singleton || diffOfOne) && twoFrequencies && oneOccurence) {
        return 'YES'
    }

    return 'NO'
}

const testCases = [
    ["aabbcd", "NO"],
    ["aabbccddeefghi", "NO"],
    ["abcdefghhgfedecba", "YES"],
    ["abccc", "NO"],
    ["cccab", "NO"],
    ["", "NO"],
    ["aabbcd", "NO"],
    ["a", "YES"],
    ["aaabbbcccd", "YES"],
    ["aaabbbcccdddd", "YES"],
    ["aaabbbcccdde", "NO"],
]

function tests(testCases) {

    let testFailed = 0
    for (const t of testCases) {
        if (isValid(t[0]) != t[1]) {
            testFailed++
            console.log("TEST CASE FAILED", t)
        }        
    }

    if (testFailed == 0) {
        console.log("All TESTS PASSED")
    }
}

tests(testCases)