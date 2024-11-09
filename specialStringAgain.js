
// Complete the substrCount function below.
function substrCountNotOptiomalSolution(n, s) {
    let specialSubstrings = 0
    
    for (let i = 0; i < n; i++) {
        let str = s[i]                
        specialSubstrings++        
        for (let j = i + 1; j < n; j++) {
            str+=s[j]
            // Are all characters the same
            const setOfstr = new Set(str.split(""))
            
            if (setOfstr.size == 1) {
                specialSubstrings++                
            } else if (setOfstr.size == 2 && (str.length % 2 == 1)) {                
                const setS1 = new Set(str.substring(0, str.length / 2).split(""))
                const setS2 = new Set(str.substring(str.length / 2 + 1, str.length).split(""))
                                
                if (setS1.size == 1 && setS2.size == 1) {
                    specialSubstrings++                    
                }                
            }                                    
        }        
    }
        
    return specialSubstrings
}

function substrCount(n, s) {
    let unique = new Set()
  
    for (let i = 0; i < s.length; i++) {
      let j = i
      while (s[j] == s[i]) {
        unique.add(i + '-' + j)
        j++
      }
      let k = 1
      while (i - k >= 0 && i + k <= s.length && s[i + k] == s[i - k]
        && (k == 1 || s[i + k] == s[i + k - 1])) {
        unique.add((i - k) + '-' + (i + k))
        k++
      }
    }
    return unique.size
  }


const testCases = [
    ["asasd", 7],
    ["abcbaba", 10],
    ["aaaa", 10],    
]


tests(testCases)

function tests(testCases) {

    let testFailed = 0
    for (const t of testCases) {
        const out = substrCount(t[0].length, t[0]) 
        if (out != t[1]) {
            testFailed++
            console.log("TEST CASE FAILED", t, "EXPECTED OUTPUT", t[1], "ACTUAL OUTPUT", out)
        }        
    }

    if (testFailed == 0) {
        console.log("All TESTS PASSED")
    }
}
