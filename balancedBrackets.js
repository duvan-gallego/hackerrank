/*
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {

    let stack = []
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        } else {
            const lastChar = stack[stack.length - 1]
            if ((lastChar === "(" && char === ")") || (lastChar === "[" && char === "]") || (lastChar === "{" && char === "}")) {
                stack.pop()
            } else {
                return "NO"
            }            
        }            
    }
        
    if (stack.length === 0) {
        return "YES"
    }
    
    return "NO"
}

const inputNo = "{[(])}"
const inputYes = "{{[[(())]]}}"

console.log(isBalanced(inputNo))