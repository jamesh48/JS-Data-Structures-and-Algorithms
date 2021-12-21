class LinkedListNode {
  public value: any;
  public next: LinkedListNode | null;
  public previous: LinkedListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

// A single LinkedListNode in the middle:

// {value: 0, next: LinkedListNode, previous: LinkedListNode }

export default LinkedListNode;
