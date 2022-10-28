const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let list = new LinkedList();
let dList = new DoublyLinkedList();
//let start;
//let end;
start = Date.now();
for (let i = 0; i < 10000; i++) {
list.addToHead(7);
}
end = Date.now();
console.log(end - start)

start = Date.now();
for (let i = 0; i < 10000; i++) {
    list.addToTail(7);
    }
end = Date.now();
console.log(end - start)

start = Date.now();
for (let i = 0; i < 10000; i++) {
    dList.addToHead(7);
    }
end = Date.now();
console.log(end - start)

start = Date.now();
for (let i = 0; i < 10000; i++) {
    dList.addToTail(7);
    }
end = Date.now();
console.log(end - start)
