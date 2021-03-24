// function identity(n){
//     return n+1
// }

// function take(arr, n) {
//     if (n <= 0) {
//         return []
//     } else if (n > arr.length) {
//         let copied_arr = arr
//         return copied_arr
//     } else {
//         let sliced_arr = []
//         for (let i = 0; i < n; i++) {
//             console.log(arr[i])
//             sliced_arr.push(arr[i])
//         }
//         return sliced_arr
//     }
// }

// take([1,2,3],2)
// console.log(take([1,2,3],2))

// function drop(arr, n) {
//     if (n <= 0) {
//         return [...arr]
//     } else if (n > arr.length) {
//         let copied_arr = [...arr]
//         return []
//     } else {
//         let sliced_arr = [...arr]
//         for (let i = 0; i < n; i++) {
//             // console.log(arr[i])
//             sliced_arr.shift()
//             // console.log(arr)
//         }
//         // sliced_arr = arr
//         return sliced_arr
//     }
// }

// console.log(drop([1,2,3],5))

// function last(arr, n) {
//     if (n === 0) {
//         return []
//     } else if (n < 0 || n === undefined) {
//         return [arr[arr.length - 1]]
//     } else if (n > arr.length) {
//         return [...arr]
//     } else {
//         let sliced_arr = [...arr]
//         for (let i = 0; i < sliced_arr.length - n; i++) {
//             sliced_arr.shift()
//         }
//         return sliced_arr
//     }
// }

// console.log(last([1, 2, 3], 0))

function each(collection, iteratee) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            iteratee(collection[i], i, collection)
        }
    } else {
        for (let key in collection) {
            iteratee(collection[key], key, collection)
        }
    }
}

// function is_even(n){
//     return n%2 === 0
// }
// let arr = [1,2,3,4,5,6] 
// let new_arr = []
// each(arr,el => new_arr.push(is_even(el)))
// console.log(new_arr)

// function filter(arr, test) {
//     let bollean_arr = each(arr, test)

// }

// function unique(arr) {
//     let result = []
//     each(arr, function (el) {
//         if (result.length === 0) {
//             result.push(el)
//         } else {
//             let count = 0
//             for (let i = 0; i < result.length; i++) {
//                 if (el === result[i]) {
//                     count += 1
//                 }
//             }
//             if (count === 0) {
//                 result.push(el)
//             }
//         }
//     })
//     console.log(result)
// }

// unique([1, 2, 2, 3, 4, 4, 4, 5])

// let arr = [0,1,2,3,undefined,NaN,4]

// for(let i of arr){
//     // console.log(i)
//     if(i){
//         console.log(i,true)
//     }else{
//         console.log(i,false)
//     }
// }

function reduce(arr, iteratee, initVal) {
    // TODO: 여기에 코드를 작성합니다.
    let acc
    if (initVal !== undefined) {
      acc = initVal
      let i = 0
      each(arr, function (el) {
        acc = iteratee(acc, el, i, arr)
        i += 1
      })
      return acc
    } else {
      acc = arr[0]
      let i = 0
      each(arr, function (el) {
        if (el !== arr[0]) {
          acc = iteratee(acc, el, i, arr)
          i += 1
        }
      })
      return acc
    }
  };

function filter(arr, test) {
    let bol_arr = []
    let result = []
    each(arr, el => bol_arr.push(test(el)))
    for (let i = 0; i < bol_arr.length; i++) {
        if (bol_arr[i]) {
            result.push(arr[i])
        }
    }
    return result
    // TODO: 여기에 코드를 작성합니다.
};

function includes(arr, target) {
    // TODO: 여기에 코드를 작성합니다.
    let result = false
    each(arr, function (el) {
      if (el === target) {
        result = true
      }
    })
    return result
  };

let arr0 = [1, 2, 5, 6]
let arr1 = [1, 2, 4, 7]
let arr2 = [1, 4, 5, 8]

function insertion(...arr) {
    return reduce(arr,function(el){
        filter(el, in_el => filter(arr[0],includes(el,in_el)))
    })
    
}

insertion(arr0, arr1, arr2)
console.log(insertion(arr0, arr1, arr2))