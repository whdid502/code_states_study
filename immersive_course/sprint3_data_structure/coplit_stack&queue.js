// class Stack {
//   constructor() {
//     this.storage = {};
//     this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
//   }

//   size() {
//     return this.top;
//   }

// 	// 스택에 데이터를 추가 할 수 있어야 합니다.
//   push(element) {
//     this.storage[this.top] = element;
//     this.top += 1;
//   }

// 	// // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
//   pop() {
//     // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
//     if (this.top === 0) {
//       return;
//     }

//     const result = this.storage[this.top-1];
//     delete this.storage[this.top-1];
//     this.top -= 1;

//     return result;
//   }

// }

// const stack = new Stack();

// console.log(stack.size()); // 0
// for(let i = 1; i < 10; i++) {
//   	stack.push(i);
// }
// console.log(stack.pop()); // 9
// console.log(stack.pop()); // 8
// console.log(stack.size()); // 7
// stack.push(8)
// console.log(stack.size()); // 8

// class Queue {
//   constructor() {
//     this.storage = {};
//     this.front = 0;
//     this.rear = 0;
//   }

//   size() {
//     return this.rear - this.front
//   }

// 	// 큐에 데이터를 추가 할 수 있어야 합니다.
//   enqueue(element) {
//     this.storage[this.rear] = element;
//     this.rear += 1;
//   }

// 	// 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
//   dequeue() {
//     // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
//     if ((this.rear - this.front) === 0) {
//       return;
//     }

//     const result = this.storage[this.front];
//     delete this.storage[this.front];
//     this.front += 1;

//     return result;
//   }
// }

// const queue = new Queue();

// queue.size(); // 0
// for(let i = 1; i < 10; i++) {
//   	queue.enqueue(i);
// }
// queue.dequeue(); // 1
// queue.dequeue(); // 2
// queue.size(); // 7
// queue.enqueue(10);
// queue.size(); // 8
// queue.dequeue(); // 3
// queue.dequeue(); // 4
// queue.size(); // 6

// function browserStack(actions, start) {
//   // TODO: 여기에 코드를 작성합니다.
//   let prev_page = []
//   let next_page = []
//   let now_page = start
//   for(let key of actions){
//     if(typeof key === 'string'){
//       prev_page.push(now_page)
//       next_page.splice(0,next_page.length)
//       now_page = key
//     }
//     else if(key === -1 && prev_page.length !== 0){
//       next_page.push(now_page)
//       now_page = prev_page.pop()
//     }
//     else if(key === 1 && next_page.length !== 0){
//       prev_page.push(now_page)
//       now_page = next_page.pop()
//     }
//     console.log(prev_page, now_page, next_page)
//   }
//   let result = []
//   result[0] = prev_page
//   result[1] = now_page
//   result[2] = next_page  
//   return result
// }

// let actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
// let start = "A";

// let output = browserStack(actions, start);
// console.log(output); // [["A"], "B", ["A", "D"]]

// function improveBook(books, speeds) {
//   // TODO: 여기에 코드를 작성합니다.
//   // let book_progress = []
//   let complete_days = []

//   for (let i = 0; i < books.length; i++) {
//     let complete_day = 1
//     let book_progress = books[i] + (speeds[i] * complete_day)
//     while (book_progress < 100) {
//       book_progress = books[i] + (speeds[i] * (complete_day + 1))
//       complete_day++
//     }
//     complete_days.push(complete_day)
//   }
//   console.log(complete_days)
//   // console.log('-----------')

//   let result = []
//   let point = 0
//   for (let i = 0; i < complete_days.length + 1; i++) {
//     // console.log('point : ', complete_days[point], point)
//     // console.log('비교대상 : ', complete_days[i], i)
//     if (complete_days[point] < complete_days[i]) {
//       let published_books = complete_days.slice(point, i)
//       // console.log(published_books)
//       result.push(published_books)
//       point = i
//     }
//     if(i === complete_days.length){
//       result.push(complete_days.slice(point,i))
//     }

//   }

//   return result.map((el) => el.length)

// }

// const result2 = improveBook([80, 30, 40, 55, 66, 21, 8, 25, 44, 77, 92], [20, 30, 50, 15, 20, 50, 22, 25, 35, 23, 2]);
// console.log(result2)

function queuePrinter(bufferSize, capacities, documents) {
  // TODO: 여기에 코드를 작성합니다.
  let work_area = []
  for (let i = 0; i < bufferSize; i++) {
    work_area.push(0)
  }
  let printed = []
  let count = 0

  let documents_sum = documents.length
  while (printed.length !== documents_sum) {
    let work_sum = (work_area.reduce((arr, cur) => arr + cur))


    if (work_area[0] !== 0) {
      printed.push(work_area[0])
      work_area[0] = 0
      for (let i = 0; i < work_area.length - 1; i++) {
        work_area[i] = work_area[i + 1]
      }
      if ((work_area.reduce((arr, cur) => arr + cur)) + documents[0] <= capacities) {
        work_area[work_area.length - 1] = documents.shift()
      } else {
        work_area[work_area.length - 1] = 0
      }
    } else {
      for (let i = 0; i < work_area.length - 1; i++) {
        work_area[i] = work_area[i + 1]
      }
      work_area[work_area.length - 1] = 0

      console.log(work_area)
      console.log((work_area.reduce((arr, cur) => arr + cur)) + documents[0])

      if ((work_area.reduce((arr, cur) => arr + cur)) + documents[0] <= capacities) {
        work_area[work_area.length - 1] = documents.shift()
      }
      //  else {
      //   work_area[work_area.length - 1] = 0
      // }
    }
    count++

    console.log('------')
    console.log('프린트중인것 : ', work_area)
    console.log('프린트대기중인것 : ', documents)
    console.log('프린트된것 : ', printed)
    console.log('프린트중인 용량 : ', (work_area.reduce((arr, cur) => arr + cur)))
    console.log('지난 시간 : ', count)


  }
  return count
}


let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output) // 8