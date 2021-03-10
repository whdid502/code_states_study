function getType(anything) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(anything)) {
        return 'array'
    } else if (anything === 'null') {
        return 'null'
    } else {
        return typeof anything
    }
}

//   console.log(getType(null))

function getFirstElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr[0]
}

function getLastElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr[arr.length - 1]
}

function getNthElement(arr, index) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length >= 1) {
        if (index < arr.length) {
            return arr[index]
        } else {
            return 'out of index range'
        }
    } else {
        console.log(1)
        return undefined
    }
}

function computeSumOfAllElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

function getAllWords(str) {
    // TODO: 여기에 코드를 작성합니다.
    if (str.length !== 0) {
        return str.split(' ')
    } else {
        return []
    }
}

// console.log(getAllWords('Something like this here'))

function getAllLetters(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = []
    for (let i = 0; i < str.length; i++) {
        result.push(str[i])
    }
    return result
}

function getLargestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return Math.max.apply(null, arr)
}

function getLongestWord(str) {
    // TODO: 여기에 코드를 작성합니다.
    let str_list = str.split(' ')
    let result = str_list[0]
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i].length > result.length) {
            result = str_list[i]
        }
    }
    return result
}

function getEvenNumbers(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result_list = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result_list.push(arr[i])
        }
    }
    return result_list
}

function addToFront(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    arr.unshift(el)
    return arr
}

function addToBack(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    arr.push(el)
    return arr
}

function mergeArrays(arr1, arr2) {
    // TODO: 여기에 코드를 작성합니다.
    return arr1.concat(arr2)
}
function getElementsAfter(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.slice(n + 1, arr.length)
}

// console.log(getElementsAfter([4,5,6,7,8,9],3))
function getElementsUpTo(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    if (n > arr.length) {
        return []
    } else {
        return arr.slice(0, n)
    }
}

// console.log(getElementsUpTo([4], 10))

function getAllElementsButFirst(arr) {
    // TODO: 여기에 코드를 작성합니다.
    arr.shift()
    return arr
}

function getAllElementsButLast(arr) {
    // TODO: 여기에 코드를 작성합니다.
    arr.pop()
    return arr
}

function removeFromBackOfNew(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.slice(0, arr.length - 1)
}

function addToBackOfNew(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    let result = arr.concat(el)
    return result
}

function addToFrontOfNew(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [el].concat(arr)
    return result
}

function getAllElementsButNth(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    arr.splice(n, 1)
    return arr
}

function createPhoneNumber(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 8) {
        // console.log(1)
        return '(010)' + arr[0] + arr[1] + arr[2] + arr[3] + '-' + arr[4] + arr[5] + arr[6] + arr[7]
    } else if (arr.length === 11) {
        return '(' + arr[0] + arr[1] + arr[2] + ')' + arr[3] + arr[4] + arr[5] + arr[6] + '-' + arr[7] + arr[8] + arr[9] + arr[10]
    }
}

// console.log(createPhoneNumber([2,4,3,1,8,7,6,5]))

function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = []
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            result.push(i)
        } else if (i === 1) {
            result.push(i)
        } else {
            let sum = result[result.length-2] + result[result.length - 1]
            result.push(sum)
        }
    }
    return result
}

console.log(fibonacci(9))