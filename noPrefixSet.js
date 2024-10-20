/*
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */

function noPrefix(words) {
      

    let ws = new Set(); // Words that were visited
    let ps = new Set(); // Prefixe of every word that was visited


    for (const s of words) {        
        if (ps.has(s)) {
            console.log("BAD SET")
            console.log(s)
            return
        }

        let prefix = ""
        for (let i = 0; i < s.length; i++) {
            prefix+=s[i]

            if (ws.has(prefix)) {
                console.log("BAD SET")
                console.log(s)
                return
            }
            ps.add(prefix)
        }
        ws.add(s)
    }

    console.log("GOOD SET")
}


const input1 = [
    'aab',
    'defgab',
    'abcde',
    'aabcde',
    'cedaaa',
    'bbbbbbbbbb',
    'jabjjjad'
  ]

const input2 = [
    "aab",
    "aac",
    "aacghgh",
    "aabghgh"
]

noPrefix(input2)