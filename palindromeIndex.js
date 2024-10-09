
function isPalindrome(s) {
    if (s && s.length === 1) return true;
    
    let l = 0
    let r = s.length - 1
    
    while (r > l) {
        if (s[l] === s[r]) {
            l++
            r--
        } else {
            return false
        }        
    }
    
    return true
}


/* 
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    
    if (s && isPalindrome(s)) return -1;
    
    for (let i = 0; i < s.length; i++) {
        const stringToEvaluate = s.substring(0, i) + s.substring(i + 1, s.length);
                
        if (isPalindrome(stringToEvaluate)) {
            return i;
        }
    }
    
    return -1;

}

const input = "kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk"

console.log(palindromeIndex(input))