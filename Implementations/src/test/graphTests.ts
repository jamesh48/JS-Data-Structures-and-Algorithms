import chai, { assert, expect } from "chai";
import Graph from "../Graph/Graph";
// @ts-ignore
const should = chai.should();

describe("Graph Test Suite", () => {
  describe("Basic Directed Graph Tests", () => {
    it("should successfully instantiate a directed graph when no direction is passed in", () => {
      const graph = new Graph();
      graph.should.have.property("nodes");
      graph.should.have.property("edgeDirection");
      (graph.nodes instanceof Map).should.equal(true);
      expect(graph.edgeDirection).to.be.a("symbol");
    });

    it("should successfully instantiate a directed graph when DIRECTED is passed in", () => {
      const graph = new Graph(Graph.DIRECTED);
      graph.should.have.property("nodes");
      graph.should.have.property("edgeDirection");
      (graph.nodes instanceof Map).should.equal(true);
      expect(graph.edgeDirection).to.be.a("symbol");
    });
  });

  describe("Undirected Graph Tests", () => {
    let graph: any = null;
    describe("Basic Undirected Graph Tests", () => {
      it("should successfully instantiate a undirected graph when UNDIRECTED is passed in", () => {
        const graph = new Graph(Graph.UNDIRECTED);
        graph.should.have.property("nodes");
        graph.should.have.property("edgeDirection");
        (graph.nodes instanceof Map).should.equal(true);
        expect(graph.edgeDirection).to.be.a("symbol");
      });
    });

    let first: any = null;
    beforeEach(() => {
      graph = new Graph(Graph.UNDIRECTED);
      [first] = graph.addEdge(1, 2);
      graph.addEdge(1, 3);
      graph.addEdge(1, 4);
      graph.addEdge(5, 2);
      graph.addEdge(6, 3);
      graph.addEdge(7, 3);
      graph.addEdge(8, 4);
      graph.addEdge(9, 5);
      graph.addEdge(10, 6);
    });

    describe("Correct Values", () => {
      it("should add an edge correctly in an undirected graph", () => {
        assert.equal(first.value, 1);
        assert.equal(graph.nodes.get(2).adjacents[0].value, 1);
        assert.equal(graph.nodes.get(1).adjacents[0].value, 2);
      });

      it("should successfully add multiple edges correctly in an undirected graph", () => {
        const mapEdges = (value: any) => {
          return graph.nodes
            .get(value)
            .adjacents.map((x: { value: number }) => x.value);
        };

        assert.equal(first.value, 1);
        expect(mapEdges(1)).to.eql([2, 3, 4]);
        expect(mapEdges(2)).to.eql([1, 5]);
        expect(mapEdges(3)).to.eql([1, 6, 7]);
        expect(mapEdges(4)).to.eql([1, 8]);
        expect(mapEdges(5)).to.eql([2, 9]);
        expect(mapEdges(6)).to.eql([3, 10]);
        expect(mapEdges(7)).to.eql([3]);
        expect(mapEdges(8)).to.eql([4]);
        expect(mapEdges(9)).to.eql([5]);
        expect(mapEdges(10)).to.eql([6]);
      });
    });

    describe("BFS and DPS", () => {
      it("should successfully perform a bfs on an undirected graph", () => {
        const bfsFromFirst = graph.bfs(first);
        for (let i = 1; i < 11; i++) {
          assert.equal(bfsFromFirst.next().value.value, i);
        }
      });

      it("should successfully perform a dfs on an undirected graph", () => {
        const dfsFromFirst = graph.dfs(first);
        const visitedOrder = Array.from(dfsFromFirst);
        const values = visitedOrder.map((node: any) => node.value);
        expect(values).to.eql([1, 4, 8, 3, 7, 6, 10, 2, 5, 9]);
      });
    });
  });
});
