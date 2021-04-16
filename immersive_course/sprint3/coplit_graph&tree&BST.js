// function createMatrix(edges) {
// 	// TODO: 여기에 코드를 작성합니다.
// 	let max_edges = []
// 	let result = []
// 	for (let key of edges) {
// 		max_edges.push(Math.max(...key.slice(0, 2)))
// 	}
// 	for (let i = 0; i <= Math.max(...max_edges); i++) {
// 		let in_arr = []
// 		for (let j = 0; j <= Math.max(...max_edges); j++) {
// 			in_arr.push(0)
// 		}
// 		result.push(in_arr)
// 	}
// 	for(let key of edges){
// 		console.log(key)
// 		if(key[2] === 'undirected'){
// 			result[key[0]][key[1]] = 1
// 			result[key[1]][key[0]] = 1
// 		}else{
// 			result[key[0]][key[1]] = 1
// 		}
// 	}
// 	return result
// }

// let output2 = createMatrix([
// 	[0, 2, "directed"],
// 	[2, 4, "undirected"],
// 	[1, 3, "undirected"],
// 	[2, 1, "directed"],
// ]);

// console.log(output2);
// /**
//  * [
//  *  [0, 0, 1, 0, 0],
//  *  [0, 0, 0, 1, 0],
//  *  [0, 1, 0, 0, 1],
//  *  [0, 1, 0, 0, 0],
//  *  [0, 0, 1, 0, 0],
//  * ]
//  */

// function getDirections(matrix, from, to) {
// 	// TODO: 여기에 코드를 작성합니다.
// 	let count = matrix.length
// 	console.log(count)

// 	let search_edge = function (matrix, from, to) {
// 		count--
// 		console.log('count', count)
// 		if (matrix[from][to] === 1) {
// 			return true
// 		}
// 		else {
// 			if (count === 0) {
// 				return false
// 			}
// 			//matrix[from]에서 1의 index를 모두 찾은뒤
// 			//해당 index를 배열에 넣주고
// 			//배열에 반복문을 돌려서 재귀
// 			if (matrix[from].includes(1)) {
// 				let widths = [...matrix[from]]
// 				let edge_arr = []
// 				for (let key of widths) {
// 					if (key === 1) {
// 						edge_arr.push(widths.indexOf(key))
// 						widths[widths.indexOf(key)] = 0
// 					}
// 				}
// 				for (let key of edge_arr) {
// 					return search_edge(matrix, key, to)
// 				}
// 			}
// 			else {
// 				return false
// 			}

// 		}
// 	}
// 	return search_edge(matrix, from, to)
// }

// const result = getDirections(
// 	[
// 		[0, 1, 0, 0],
// 		[0, 0, 1, 0],
// 		[0, 0, 0, 1],
// 		[0, 1, 0, 0],
// 	],
// 	1,
// 	0
// );
// console.log(result); // true

// function getDirections(matrix, from, to) {
// 	let first = from
// 	let second = to

// 	if (from <= to) {
// 		for (let i = 0; i < matrix.length; i++) {
// 			if (matrix[from][to] === 1) {
// 				return true
// 			}
// 			if (matrix[from][i] === 1) {
// 				const matrixs = getDirections(matrix, i, to)
// 				if (matrixs === true) {
// 					return true
// 				}
// 			}
// 		}
// 	} else if (from >= to) {
// 		for (let i = 0; i < matrix.length; i++) {
// 			if (matrix[from][to] === 1) {
// 				return true
// 			} else if (i > 1 && from === first && to === second) {
// 				return false
// 			}
// 			if (matrix[from][i] === 1) {
// 				const matrixs = getDirections(matrix, i, to)
// 				if (matrixs === true) {
// 					return true
// 				}
// 			}
// 		}
// 	}
// 	return false
// }

// function popularRestaurant(n, menus) {
//   // TODO: 여기에 코드를 작성합니다.
// 	let food_count = []
// 	menus.forEach((el) => {food_count.push(0)});
// 	// console.log(food_count)
// 	// console.log(Math.max(...food_count))
// 	let count = 0
// 	while(food_count.reduce((arr,cur) => arr+cur) <= n){
// 		count++
// 		console.log(count)
// 		console.log(food_count)
// 		console.log(food_count.reduce((arr,cur) => arr+cur))
// 		console.log('---')

// 		for(let i = 0 ; i < menus.length ; i++){
// 			// console.log('dd')
// 			if((count / menus[i]) % 1 === 0){
// 				// console.log(count / menus[i])
// 				food_count[i] = food_count[i] + 1
// 			}
// 		}
// 	}
// 	return count
// }

// let n = 10;
// let menus = [1, 2, 4, 6];

// let output = popularRestaurant(n, menus);
// console.log(output); // 6

// function connectedVertices(edges) {
// 	// TODO: 여기에 코드를 작성합니다.
// 	let node = []
// 	for (let key of edges) {
// 		node.push(...key)
// 	}
// 	const max_node = Math.max(...node)
// 	let links = []
// 	for (let i = 0; i < max_node; i++) {
// 		links.push([i, 0])
// 	}

// console.log(links)

// 	for (let i = 0; i < edges.length; i++) {

// 		let start_val = edges[i][0]
// 		let end_val = edges[i][1]
// 		console.log(`${i}번째 links[${end_val}]를 links[${start_val}]으로`)
// 		if (links[i][1] === 0) {
// 			links[edges[i][1]][0] = links[edges[i][0]][0]
// 			links[i][1]++
// 			console.log(links)
// 		}

// 	}
// 	// console.log(links)

// }



// const result3 = connectedVertices([
// 	[0, 1],
// 	[1, 7],
// 	[4, 7],
// 	[3, 4],
// 	[7, 3],
// 	[5, 6],
// 	[2, 5],
// 	[6, 2],
// 	[8, 9]
// ]);
// console.log(result3); // 3

// function connectedVertices(edges) {

// 	// 최대 버텍스를 찾습니다.
// 	const maxVertex = edges.reduce((a, c) => {
// 		const bigger = Math.max(...c);
// 		if (bigger > a) return bigger;
// 		return a;
// 	}, 0);

// 	// 이 레퍼런스는 인접 리스트로 만듭니다. (행렬도 가능합니다. 행렬로 작성해 보세요.)
// 	const adjList = {};

//   // 인접 리스트에 최대 버텍스 크기만큼 반복해 버텍스를 만들어 줍니다.
// 	for (let i = 0; i <= maxVertex; i++) {
// 		adjList[i] = [];
// 	}
// 	// console.log(adjList)

//   // edges를 순회하며, (무향 그래프이므로 쌍방으로) 간선을 연결해 줍니다.
// 	// 이렇게 adjList 그래프가 완성되었습니다.
// 	for (let i = 0; i < edges.length; i++) {
// 		adjList[edges[i][0]].push(edges[i][1]);
// 		adjList[edges[i][1]].push(edges[i][0]);
// 		// console.log(adjList)
// 	}

//   // 방문한 버텍스를 담을 객체를 선언합니다.
// 	const visited = {};
// 	// 컴포넌트가 몇 개인지 카운트할 변수를 선언합니다.
// 	let count = 0;

//   // 그래프에 있는 버텍스를 전부 순회합니다.
// 	for (let vertex = 0; vertex <= maxVertex; vertex++) {

// 		// 만약 i 번째 버텍스를 방문하지 않았다면 bfs로 해당 버텍스와, 버텍스와 연결된(간선) 모든 버텍스를 방문합니다.
// 		// BFS로 갈 수 있는 모든 정점들을 방문하며 visited에 담기 때문에, 방문한 버텍스는 visited에 들어 있어서 bfs를 돌지 않습니다.
// 		// 이렇게 컴포넌트를 확인합니다.
// 		if (!visited[vertex]) {
// 			// 그래프와 버텍스, 방문했는지 확인할 visited를 변수에 담습니다.
// 			bfs(adjList, vertex, visited);

// 			// 카운트를 셉니다.
// 			count++;
// 		}
// 	}

//   // 카운트를 반환합니다.
// 	return count;
// }


// // bfs solution
// function bfs(adjList, vertex, visited) {

// 	// bfs는 가장 가까운 정점부터 탐색하기 때문에 queue를 사용합니다.
// 	// queue에 vertex를 담습니다.
// 	const queue = [vertex];
// 	// 해당 버텍스를 방문했기 때문에 visited에 담아 주고, 방문했다는 표시인 true를 할당합니다.
// 	visited[vertex] = true;

//   // queue의 길이가 0일 때까지 순환합니다.
// 	while (queue.length > 0) {

// 		// cur 변수에 정점을 할당합니다.
// 		// queue는 선입선출이기 때문에 shift 메소드를 사용하여 버텍스를 가져옵니다.
// 		const cur = queue.shift();

// 		// 그래프의 cur 정점에 있는 간선들을 전부 순회합니다.
// 		for (let i = 0; i < adjList[cur].length; i++) {

// 			// 만약, 해당 버텍스를 방문하지 않았다면 queue에 삽입합니다.
// 			// 방문했다는 표시로 visited에 해당 버텍스를 삽입하고 true를 할당합니다.
// 			if (!visited[adjList[cur][i]]) {
// 				queue.push(adjList[cur][i]);
// 				visited[adjList[cur][i]] = true;
// 			}

// 			// queue에 다음으로 방문할 버텍스가 있기 때문에 while은 멈추지 않습니다.
// 			// 만약, queue가 비어 있다면 더 이상 갈 곳이 없는 것이기 때문에 bfs 함수를 종료하고 카운트를 셉니다.
// 		}
// 	}
// }

// // dfs solution
// // bfs 함수 대신 dfs를 사용해도 결과는 같습니다.
// function dfs(adjList, vertex, visited) {
// 	// 해당 버텍스에 방문했다는 표시로 visited key에 vertex를 담고 값에 true를 할당합니다.
// 	visited[vertex] = true;

// 	// 해당 버텍스의 모든 간선들을 전부 순회합니다.
// 	for (let i = 0; i < adjList[vertex].length; i++) {

// 		// 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
// 		if (!visited[adjList[vertex][i]]) {
// 			// dfs를 호출해(재귀) 방문합니다.
// 			dfs(adjList, adjList[vertex][i], visited);
// 		}
// 		// 모든 방문이 종료되면 다음 버텍스를 확인합니다.
// 		// 재귀가 종료되면(한 정점에서 이어진 모든 간선들을 확인했다면) dfs 함수를 종료하고 카운트를 셉니다. 
// 	}
// }

function connectedVertices(edges) {
	const maxVertex = edges.reduce((a, c) => {
		const bigger = Math.max(...c);
		if (bigger > a) return bigger;
		return a;
	}, 0);
	const adjList = {};
	for (let i = 0; i <= maxVertex; i++) {
		adjList[i] = [];
	}
	for (let i = 0; i < edges.length; i++) {
		adjList[edges[i][0]].push(edges[i][1]);
		adjList[edges[i][1]].push(edges[i][0]);
	}
	const visited = {};
	let count = 0;
	for (let vertex = 0; vertex <= maxVertex; vertex++) {
		if (!visited[vertex]) {
			dfs(adjList, vertex, visited);
			count++;
		}
	}
	return count;
}

function dfs(adjList, vertex, visited) {
	visited[vertex] = true;
	for (let i = 0; i < adjList[vertex].length; i++) {
		if (!visited[adjList[vertex][i]]) {
			dfs(adjList, adjList[vertex][i], visited);
		}
	}
}

const result4 = connectedVertices([
	[0, 1],
	[5, 6],
	[6, 4],
	[2, 3],
	[4, 1],
	[3, 4],
]);
console.log(result4)