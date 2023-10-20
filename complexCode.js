/*
  Filename: complexCode.js
  
  Description: This code implements a complex algorithm for finding the shortest path in a graph using Dijkstra's algorithm.
  
  Author: [Your Name]
  Date: [Current Date]
  
  Note: This code assumes that the graph is stored in an adjacency matrix called 'graph' and the number of vertices is stored in the variable 'numVertices'.
*/

// Node class representing a vertex in the graph
class Node {
  constructor(id, distance) {
    this.id = id; // Vertex ID
    this.distance = distance; // Distance from the source node
  }
}

// Function to find the minimum distance node from a set of unvisited nodes
function findMinDistanceNode(distances, visited) {
  let minDistance = Infinity;
  let minNode = null;

  for (let i = 0; i < numVertices; i++) {
    if (!visited[i] && distances[i].distance < minDistance) {
      minDistance = distances[i].distance;
      minNode = i;
    }
  }

  return minNode;
}

// Function to find the shortest path using Dijkstra's algorithm
function dijkstra(source) {
  const distances = Array.from({ length: numVertices }, (_, i) => {
    return new Node(i, Infinity);
  });
  distances[source].distance = 0;

  const visited = Array(numVertices).fill(false);

  for (let i = 0; i < numVertices - 1; i++) {
    const u = findMinDistanceNode(distances, visited);
    visited[u] = true;

    for (let v = 0; v < numVertices; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 &&
        distances[u].distance !== Infinity &&
        distances[u].distance + graph[u][v] < distances[v].distance
      ) {
        distances[v].distance = distances[u].distance + graph[u][v];
      }
    }
  }

  return distances;
}

// Example usage
const numVertices = 5;
const graph = [
  [0, 4, 1, 0, 0],
  [4, 0, 3, 7, 0],
  [1, 3, 0, 4, 2],
  [0, 7, 4, 0, 5],
  [0, 0, 2, 5, 0]
];

const shortestPath = dijkstra(0);
console.log(shortestPath);
