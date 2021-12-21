// https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/5628a2772513a05ceb3f088976b81914c9951fd2/src/data-structures/linked-lists/linked-list.js
import LinkedListNode from "./LinkedListNode";

class LinkedList {
  public first: LinkedListNode | null;
  public last: any;
  public size: number;
  public unshift: (value: any) => LinkedListNode;
  public shift: () => LinkedListNode;
  public pop: () => LinkedListNode;
  public push: (value: any) => void;
  public length: () => number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  getLength() {
    return this.size;
  }

  // Adds an element to the beginning of the list, similiar to array.unshift.
  addFirst(value: any) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.first;
    if (this.first) {
      this.first.previous = newNode;
    } else {
      this.last = newNode;
    }

    this.first = newNode; /* Update the Head */
    this.size += 1;
    return newNode;
  }

  addLast(value: any) {
    const newNode = new LinkedListNode(value);

    if (this.first) {
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return newNode;
  }

  /* Insert new element at a specific position */
  add(value: any, position = 0) {
    if (position === 0) {
      return this.addFirst(value);
    }

    if (position === this.size) {
      return this.addLast(value);
    }

    const current = this.get(position);

    if (current) {
      const newNode = new LinkedListNode(value);
      newNode.previous = current.previous;
      newNode.next = current;

      current.previous.next = newNode;
      current.previous = newNode;
      this.size += 1;
      return newNode;
    }
    return undefined;
  }

  get(index = 0) {
    return this.find((current, position) => {
      if (position === index) {
        return current;
      }
      return undefined;
    });
  }

  find(
    callback: (current: LinkedListNode, position: number) => any | undefined
  ) {
    for (
      let current = this.first, position = 0; // <1>
      current; // <2>
      position += 1, current = current.next
    ) {
      // <3>
      const result = callback(current, position); // <4>

      if (result !== undefined) {
        return result; // <5>
      }
    }
    return undefined; // not found
  }

  removeFirst() {
    const head = this.first;
    if (head) {
      this.first = head.next;
      if (this.first) {
        this.first.previous = null;
      } else {
        this.last = null;
      }
      this.size -= 1;
    }
    return head && head.value;
  }

  removeLast() {
    const tail = this.last;

    if (tail) {
      this.last = tail.previous;
      if (this.last) {
        this.last.next = null;
      } else {
        this.first = null;
      }
      this.size -= 1;
    }
    return tail && tail.value;
  }

  removeByPosition(position = 0) {
    const current = this.get(position);
    if (position === 0) {
      this.removeFirst();
    } else if (position === this.size - 1) {
      this.removeLast();
    } else if (current) {
      current.previous.next = current.next;
      current.next.previous = current.previous;
      this.size -= 1;
    }
    return current && current.value;
  }
}

// Aliases
LinkedList.prototype.push = LinkedList.prototype.addLast;
LinkedList.prototype.pop = LinkedList.prototype.removeLast;
LinkedList.prototype.unshift = LinkedList.prototype.addFirst;
LinkedList.prototype.shift = LinkedList.prototype.removeFirst;
LinkedList.prototype.length = LinkedList.prototype.getLength;
// LinkedList.prototype.search = LinkedList.prototype.contains;

export default LinkedList;
