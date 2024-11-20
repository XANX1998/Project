class Graph {
    constructor() {
      this.nodes = new Set();
      this.edges = new Map();
    }
  
    addNode(node) {
      this.nodes.add(node);
      this.edges.set(node, []);
    }
  
    addEdge(start, end, weight) {
      this.edges.get(start).push({ node: end, weight });
      this.edges.get(end).push({ node: start, weight });
    }
  }
  
  export { Graph }; // Named export
  