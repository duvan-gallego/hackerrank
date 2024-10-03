
function processData(input) {
    
    let values = input.split("\n")
    let editor = ""
    let operationsDone = []
    
    for (let i = 1; i < values.length; i++) {
        
        const op = values[i].split(" ")            
        
        switch(op[0]) {
            case "1":
                if (op[1]) {
                    operationsDone.push(editor)
                    editor += op[1]
                }
            break;
            case "2":
                if (op[1]) {
                    operationsDone.push(editor)                    
                    editor = editor.substring(0, editor.length - parseInt(op[1]));
                }
            break; 
            case "3":
                if (op[1]) {
                    console.log(editor[parseInt(op[1]) - 1])
                }                
            break;
            case "4":
                editor = operationsDone.pop()
            break;            
        }         
    }            
}

const input = "8\n1 abc\n3 3\n2 3\n1 xy\n3 2\n4\n4\n3 1"

processData(input)