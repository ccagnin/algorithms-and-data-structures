class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');

console.log(list); // SinglyLinkedList { head: Node { value: 'Hello', next: Node { value: 'Goodbye', next: [Node] } }, tail: Node { value: '!', next: null }, length: 3 }


