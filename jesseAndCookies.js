
class MinHeap {
    constructor() {
        this.heap = []
    }
    
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    
    getRightIndex(index) {
        return 2 * index + 2;
    }
    
    getParentIndex(index) {
        if (index === 0) {
            return undefined;
        }
        return Math.floor((index - 1 ) / 2);
    }
    
    insert(value) {
        if (value !== null) {
            this.heap.push(value);
            this.heapifyUp(this.heap.length - 1);
            return true;
        }
        return false;
    }
    
    heapifyUp(index) {
        let parent = this.getParentIndex(index);
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }
    
    heapifyDown(index) {
        let element = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();
        if (left < size && this.heap[left] < this.heap[element]) {
            element = left;
        }
        if (right < size && this.heap[right] < this.heap[element]) {
            element = right;
        }
        
        if (index !== element) {
            this.swap(this.heap, index, element);
            this.heapifyDown(element);
        }
    }
    
    swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.size() === 0;
    }
    
    findMinimun() {
        return this.isEmpty() ? undefined : this.heap[0];
    }
    
    extract() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() === 1) {
            return this.heap.shift();
        }
        this.swap(this.heap, 0, this.size() - 1);
        const removedValue = this.heap.pop();
        this.heapifyDown(0);
        return removedValue;
    }
}


function mix(a) {
    
    if (a.length >= 2) {
        let leastSweet = a.shift()
        let secondLeastSweet = a.shift()
        const newSweet = leastSweet + (secondLeastSweet * 2)
        if (newSweet < k) {
            a.push(newSweet)
        }        
        a.sort((a, b) => a - b)
    }
    return a
}


/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookiesNotOptimalSolution(k, A) {        
    
    if (!A || !k || A.length < 2) return -1    

    let aOrdered = A.sort((a, b) => a - b)
    
    if (aOrdered[0] > k) return 0
    let iterations = 0

    // Filter out values greater than k
    let valuesFiltered = []

    for (let i = 0; i < A.length; i++) {
        if (aOrdered[i] < k) {
            valuesFiltered.push(aOrdered[i])
        }
    }
    
    aOrdered = [...valuesFiltered]
    

    while (aOrdered.length >= 2 && aOrdered[0] < k) {
        iterations++
        aOrdered = mix(aOrdered)        
    }
    
    if (aOrdered[0] < k) {
        return - 1
    }
    
    return iterations        
}


/*
 * Optimal solution using then MinHeap data structure
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookies(k, A) {       
    
    const heap = new MinHeap();
    A.sort((a,b) => a - b)
    A.forEach((number) => {
        heap.insert(number);
    });
    
    let count = 0;
    
    while(heap.size() > 1 && heap.findMinimun() <= k) {
        count++;
        const first = heap.extract();
        const second = heap.extract();
        const newCookie = first + (2 * second);
        heap.insert(newCookie);
    }
    
    if (heap.size() === 1 && heap.findMinimun() < k) {
        return -1;
    }
    
    return count;     
}


const input = [1,2,3,9,10,12]
//const input = [8,9]

console.log(cookies(7, input))