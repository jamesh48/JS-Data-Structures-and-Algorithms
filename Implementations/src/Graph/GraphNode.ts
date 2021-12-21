class GraphNode {
  public adjacents: GraphNode[];
  public value: number;

  constructor(value: any) {
    this.value = value;
    this.adjacents = [];
  }

  addAdjacent(node: any) {
    this.adjacents.push(node);
  }

  removeAdjacent(node: any) {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1);
      return node;
    }
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node: any) {
    this.adjacents.indexOf(node) > -1;
  }
}

export default GraphNode;
