class Queue {
    constructor() {
        this.queue = []      
    }
    
    enqueue(e) {
        this.queue.push(e)
    }
    
    dequeue() {
        if (this.queue.length > 0) {
            this.queue.shift()   
        }        
    }
    
    printFront() {        
        console.log(this.queue[0])
    }
}

function processData(input) {
    
    let inputs = input.split("\n")
    const totalQueries = parseInt(inputs[0])
    let queue = new Queue()
    
    for (let i = 1; i <= totalQueries; i++) {
        let values = inputs[i].split(" ");
        if (values.length === 2) {
            queue.enqueue(values[1]);                        
        } else if (values[0] === "2") {
            queue.dequeue();
        } else if (values[0] === "3") {
            queue.printFront();
        }           
    }    
} 

const input = "10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2"

processData(input)