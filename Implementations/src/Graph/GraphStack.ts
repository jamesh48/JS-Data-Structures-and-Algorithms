import GraphNode from "./GraphNode";

class GraphStack {
  public input: GraphNode[];
  push: (element: GraphNode) => GraphStack;
  pop: () => GraphNode | undefined;
  constructor() {
    this.input = [];
  }

  add(element: GraphNode) {
    this.input.push(element);
    return this;
  }

  remove() {
    return this.input.pop();
  }

  get size() {
    return this.input.length;
  }

  isEmpty() {
    return !this.input.length;
  }
}

GraphStack.prototype.push = GraphStack.prototype.add;
GraphStack.prototype.pop = GraphStack.prototype.remove;

export default GraphStack;
