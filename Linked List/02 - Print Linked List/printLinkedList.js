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

  print() {
    let current = this.head; // começa no início da lista

    while (current) { // enquanto houver um nó
      console.log(current.value); // imprime o valor do nó
      current = current.next; // passa para o próximo nó
    }
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');
list.print();
