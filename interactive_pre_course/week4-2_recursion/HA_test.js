// function unpackGiftbox(giftBox, wish) {
//   // recursive case
//   for (let i = 0; i < giftBox.length; i++) {
//     if (giftBox[i] === wish) {
//       return true;
//     } else if (Array.isArray(giftBox[i])) {
//       const result = unpackGiftbox(giftBox[i], wish);
//       if (result === true) {
//         return true;
//       }
//     }
//   }

//   // base case
//   return false;
// }

// function test1(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   str = str.toLowerCase()
//   let word_list = str.split(' ')
//   let result = {}
//   for (let item of word_list) {
//     if (item.length !== 0) {
//       if (!(Object.keys(result).includes(item))) {
//         result[item] = 1
//       } else {
//         result[item] += 1
//       }
//     }
//   }
//   return result
// }

// let output = test1('ask a bunch try a BUNCH   get a bunch');
// console.log(output);

// function test2(num) {
//   // TODO: 여기에 코드를 작성합니다.
//   num_arr = String(num).split('')
//   result_arr = []
//   if(num_arr[0] === '-'){
//     num_arr.push(`-${num_arr[1]}`)
//     num_arr = num_arr.slice(2)
//   }
//   num_arr.forEach(element => {
//     result_arr.push(Number(element))
//   });
//   return result_arr.reduce((acc,cur) => acc + cur)
// }
// output = test2(-316);
// console.log(output)

// function test3(num) {
//   // TODO: 여기에 코드를 작성합니다.
//   let num_arr = String(num).split('').map((el) => Number(el))
//   let mul = num_arr.reduce((acc, cur) => acc * cur)
//   if (mul < 10) {
//     return mul
//   }
//   else {
//     return test3(mul)
//   }
// }
// let output = test3(786);
// console.log(output)

// function printRole(user) {
//   // Joe Blow를 클릭하면 clerk 이
//   // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
//   // 이 함수는 수정하지 마십시오.
//   console.log(user.role);
// }

// function test4(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   for(let i = 0 ; i < arr.length ; i ++){
//     let create_li = document.createElement('li')
//     let create_a = document.createElement('a')
//     let create_div = document.createElement('div')
//     create_a.setAttribute('class','name')
//     create_a.textContent = `${arr[i]['firstName']} ${arr[i]['lastName']}`
//     create_a.addEventListener('click',printRole)
//     create_div.setAttribute('class','age')
//     create_div.textContent = `${arr[i]['age']}`
//     document.querySelector('#container').appendChild(create_li)
//     create_li.appendChild(create_a)
//     create_li.appendChild(create_div)
//   }
// }

// function test5(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let obj_arr = []
//   arr.forEach(function(el){
//     let obj = {}
//     el.forEach((item) => obj[item[0]] = item[1])
//     obj_arr.push(obj)
//   })
//   obj_arr.sort(function(a,b){
//     return a['age'] - b['age']
//   })
//   let result = []
//   for(let key of obj_arr){
//     // console.log(key)
//     if(Object.keys(key).includes('firstName') && Object.keys(key).includes('lastName')){
//       result.push(`${key['firstName']} ${key['lastName']}`)
//     }else if(Object.keys(key).includes('firstName')){
//       result.push(key['firstName'])
//     }else if(Object.keys(key).includes('lastName')){
//       result.push(key['lastName'])
//     }
//   }
//   return result
// }


// let list = [
//   [
//     ['firstName', 'Joe'],
//     ['age', 42],
//     ['gender', 'male'],
//   ],
//   [
//     ['firstName', 'Mary'],
//     ['lastName', 'Jenkins'],
//     ['age', 36],
//     ['gender', 'female'],
//   ],
//   [
//     ['lastName', 'Kim'],
//     ['age', 40],
//     ['gender', 'female'],
//   ],
// ];


// let output = test5(list);
// console.log(output)

// function test6() {
//   // TODO: 여기에 코드를 작성합니다.

//   let count = 0
//   let fib_arr = [0,1]
//   return function(){
//     if(count === 0){
//       count ++
//       // console.log(1)
//       return fib_arr[0]
//     }else if(count === 1){
//       count ++
//       // console.log(1)
//       return fib_arr[1]
//     }else{
//       // console.log(fib_arr.slice(-1)[0])
//       // console.log(fib_arr.slice(-2)[0])
//       fib_arr.push(fib_arr.slice(-1)[0] + fib_arr.slice(-2)[0])
//       console.log(count, fib_arr)

//       return fib_arr.slice(-1)[0]
//     }
//   }
// }


// //         0   1   1   2   3   5   8   13    21    34    55    89    144   
// // acc     x   x   x
// // pre     no  0   1   1   2   3   5   8     13


// const fn = test6();
// console.log(fn()); // --> 0
// console.log(fn()); // --> 1
// console.log(fn()); // --> 1
// console.log(fn()); // --> 2
// console.log(fn()); // --> 3
// console.log(fn()); // --> 5

let input = [
  {
    id: 1,
    name: 'johnny',
  },
  {
    id: 2,
    name: 'ingi',
    children: [
      {
        id: 3,
        name: 'johnson',
      },
      {
        id: 5,
        name: 'steve',
        children: [
          {
            id: 6,
            name: 'lisa',
          },
        ],
      },
      {
        id: 11,
      },
    ],
  },
  {
    id: '13',
  },
];

function test7(arr, id) {
  // TODO: 여기에 코드를 작성합니다.
  // console.log(arr.length)
  let result = null

  for (let key of arr) {
    // console.log(key)
    if (key['id'] === id) {
      result = key
      return result
    } else if (Object.keys(key).includes('children')) {
      // console.log(key['children'])

      let new_search = test7(key['children'], id)
      // console.log(new_search)
      if (new_search !== null && new_search['id'] === id) {
        return new_search
      }
      // if (new_search['id'] === null){
      //   return null
      // }else if(new_search['id'] === id){
      //   return key
    }
  }
  return result
}




let output = test7(input, 1);
console.log(output); // --> { id: 1, name: 'johnny' }

output = test7(input, 5);
console.log(output); // --> { id: 5, name: 'steve', children: [{ id: 6, name: 'lisa' }] }

output = test7(input, 99);
console.log(output); // --> null