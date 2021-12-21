import LinkedList from "./LinkedList";
import LinkedListNode from "./LinkedListNode";

class Queue {
  public items: LinkedList;
  public add: (item: any) => Queue;
  public remove: () => LinkedListNode;
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(item: any) {
    this.items.push(item);
    return this;
  }

  dequeue() {
    return this.items.shift();
  }

  get() {
    return this.items.length();
  }

  isEmpty() {
    return !this.items.size;
  }
}

Queue.prototype.add = Queue.prototype.enqueue;
Queue.prototype.remove = Queue.prototype.dequeue;

export default Queue;
