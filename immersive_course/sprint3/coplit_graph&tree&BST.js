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

function connectedVertices(edges) {
	// TODO: 여기에 코드를 작성합니다.
}

const result3 = connectedVertices([
	[0, 1],
	[1, 7],
	[4, 7],
	[3, 4],
	[7, 3],
	[5, 6],
	[2, 5],
	[6, 2],
]);
console.log(result3); // 2