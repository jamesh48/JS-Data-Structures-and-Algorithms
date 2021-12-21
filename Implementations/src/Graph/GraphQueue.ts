class GraphQueue {
  public input: any[];
  constructor() {
    this.input = [];
  }

  add(element: any) {
    this.input.push(element);
  }

  remove() {
    return this.input.shift();
  }

  get size() {
    return this.input.length;
  }

  isEmpty() {
    return !this.input.length;
  }
}

export default GraphQueue;
