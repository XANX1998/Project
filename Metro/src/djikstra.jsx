
function dijkstra(graph, startNode, endNode) {
  let distances = {};
  let prev = {};
  let pq = new Set(graph.nodes);

  graph.nodes.forEach(node => {
    distances[node] = Infinity;
    prev[node] = null;
  });
  distances[startNode] = 0;

  while (pq.size) {
    let closestNode = null;
    pq.forEach(node => {
      if (closestNode === null || distances[node] < distances[closestNode]) {
        closestNode = node;
      }
    });

    pq.delete(closestNode);

    if (closestNode === endNode) {
      let path = [];
      let currentNode = closestNode;
      while (currentNode) {
        path.unshift(currentNode);
        currentNode = prev[currentNode];
      }
      return { path, distance: distances[endNode] };
    }

    graph.edges.get(closestNode).forEach(neighbor => {
      let alt = distances[closestNode] + neighbor.weight;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        prev[neighbor.node] = closestNode;
      }
    });
  }

  return { path: [], distance: Infinity };
}

export { dijkstra };
