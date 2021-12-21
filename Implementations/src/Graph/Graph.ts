import GraphNode from "./GraphNode";
import GraphQueue from "./GraphQueue";
import GraphStack from "./GraphStack";

class Graph {
  public nodes: Map<any, any>;
  static DIRECTED: symbol;
  static UNDIRECTED: symbol;
  public edgeDirection: typeof Graph.DIRECTED | typeof Graph.UNDIRECTED;

  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addEdge(source: number, destination: number) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }
    return [sourceNode, destinationNode];
  }

  addVertex(value: any) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new GraphNode(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  removeEdge(source: number, destination: number) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);
      if (this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }
  }

  removeVertex(value: any) {
    const current = this.nodes.get(value);
    if (current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(current);
      }
    }
    return this.nodes.delete(value);
  }

  *bfs(first: any) {
    const visited = new Map();
    const visitList = new GraphQueue();
    visitList.add(first);

    while (!visitList.isEmpty()) {
      const node = visitList.remove();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node, null);
        node.getAdjacents().forEach((adj: any) => visitList.add(adj));
      }
    }
  }

  *dfs(first: any) {
    const visited = new Map();
    const visitList = new GraphStack();
    visitList.add(first);
    while (!visitList.isEmpty()) {
      const node = visitList.remove();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node, null);
        node.getAdjacents().forEach((adj) => visitList.add(adj));
      }
    }
  }
}
Graph.DIRECTED = Symbol("directed graph");
Graph.UNDIRECTED = Symbol("undirected graph");

export default Graph;
