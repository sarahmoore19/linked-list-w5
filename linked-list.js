class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;

  }

  addToHead(val) {
    let newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    let newNode = new LinkedListNode(val);
    let currNode = this.head;
    if (currNode === null) {
      this.addToHead(val);
      return;
    }
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}


module.exports = LinkedList;
