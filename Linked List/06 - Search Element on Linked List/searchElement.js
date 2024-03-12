class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  searchElement(head, value) {
    let current = head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

let newNode = new Node(10)
newNode.next = new Node(20);
newNode.next.next = new Node(30);
newNode.next.next.next = new Node(40);
newNode.next.next.next.next = new Node(50);
console.log(newNode);
console.log(newNode.searchElement(newNode, 30)); // true
