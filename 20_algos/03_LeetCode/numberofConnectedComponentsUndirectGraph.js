// 323. Number of Connected Components in an Undirected Graph

// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

// Example 1:
//      0          3
//      |          |
//      1 --- 2    4
// Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.

// Example 2:
//      0           4
//      |           |
//      1 --- 2 --- 3
// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.

// Note:
// You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

function countComponents(n, edges){
	const roots = new Array(n).fill().map((e, i) => {return i});
	
	for(e of edges){
		const r1 = find(roots, e[0]);
		const r2 = find(roots, e[1]);
		if(r1 !== r2){
			roots[r1] = r2;
			--n;
		}
	}
	return n;
}

function find(roots, id){
	while(roots[id] !== id){
		roots[id] = roots[roots[id]];
		id = roots[id];
	}
	return id;
}

const edges = [[0, 1], [1, 2], [3, 4]];
console.log(countComponents(5, edges));//2