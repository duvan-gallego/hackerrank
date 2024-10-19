var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
    	node = new Node(data);
    }
 	else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function solution(values) {

    let tree = new Tree();

    let m = values.split(" ").map(Number);    

    for (let i = 0; i < m.length; i++) {
        tree.root = tree.insert(tree.root, m[i])
    }
    preOrder(tree.root);
}


function iterate(root, acum) {    
    const ouput = acum + " " + root.data
    //console.log(root.data)        

    if (root.left) {
        iterate(root.left, ouput)
    } 
    
    if (root.right) {
        iterate(root.right, ouput)
    }
    console.log("ouput", ouput)            
}


// This is a "method-only" submission.
// You only need to complete this method.

function preOrder(root) {
    
    let acum = ""

    const iterate = (rootIt) => {
        acum+= rootIt.data + " "

        if (rootIt.left) {
            iterate(rootIt.left)
        } 
        
        if (rootIt.right) {
            iterate(rootIt.right)
        }
    }

    iterate(root)
    console.log(acum.trim())
       
}

const input = "1 2 5 3 6 4"


solution(input)