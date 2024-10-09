
class SinglyLinkedListNode {
    constructor() {
        this.data = null
        this.next = null
    }    
}

function mergeLists(head1, head2) {

    if (!head1) return head2
    if (!head2) return head1
    
    let tempH1 = head1
    let tempH2 = head2
    
    let listSorted = null
    let listSortedHead = null;
    
    while (tempH1 || tempH2) {
        
        if (tempH1 && tempH2) {     
            
            let newNode = new SinglyLinkedListNode()
                   
            if (tempH1.data <= tempH2.data) {                
                                                                              
                newNode.data = tempH1.data
                                                                         
                tempH1 = tempH1.next                
            } else {
                               
                newNode.data = tempH2.data                                
                tempH2 = tempH2.next                
            }                                      
            
            if (listSorted == null) {                    
                listSorted = newNode
                listSortedHead = listSorted
            } else {
                listSorted.next = newNode
                listSorted = listSorted.next
            }
                                              
        } else if (tempH1) {                                                
            let newNode = new SinglyLinkedListNode()
            newNode.data = tempH1.data
            listSorted.next = newNode
            listSorted = listSorted.next            
            tempH1 = tempH1.next    
        } else {            
                        
            let newNode = new SinglyLinkedListNode()
            newNode.data = tempH2.data
            listSorted.next = newNode
            listSorted = listSorted.next            
            tempH2 = tempH2.next                            
        }                        
    }
    return listSortedHead    
}

function createLinkedListFromArray(a) {

    let list = new SinglyLinkedListNode()

    const head = list

    for (let i = 0; i < a.length; i++) {
        list.data = a[i]
        if ((i + 1) < a.length) {
            list.next = new SinglyLinkedListNode()
            list = list.next
        }        
    }
    return head
}

function printSinglyLinkedList(list) {
    let acum = ""
    while (list.next) {
        acum+=list.data + " "
        list = list.next
    }
    console.log("List:", acum)
}

const list1 = createLinkedListFromArray([1,2,4,6])
const list2 = createLinkedListFromArray([5,7,8])

const listMerged = mergeLists(list1, list2)

printSinglyLinkedList(list1)
printSinglyLinkedList(list2)

printSinglyLinkedList(listMerged)