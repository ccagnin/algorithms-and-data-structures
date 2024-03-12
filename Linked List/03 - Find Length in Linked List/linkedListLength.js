class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LengthLinkedList {
  push(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  count () {
    let count = 0;
    let temp = this.head;

    while (temp != null) {
      count++;
      temp = temp.next;
    }

    console.log(count);
  };
};

let list = new LengthLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.count(); // 5
