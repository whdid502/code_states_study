function addProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    obj[property] = true
}

function addPropertyAndValue(obj, property, value) {
    // TODO: 여기에 코드를 작성합니다.
    obj[property] = value
}

function addObjectProperty(obj1, property, obj2) {
    // 여기에 코드를 작성합니다
    obj1[property] = obj2
}

function removeProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    delete obj[property]
}

function removeNumberValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let key in obj) {
        console.log(typeof obj[key])
        if (typeof obj[key] === 'number') {
            delete obj[key]
        }
    }
}

// let obj2 =  { a: [true, false], b: 2, c: [8, 0], d: 4 }

// console.log(removeNumberValues(obj2))


function removeArrayValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let key in obj) {
        console.log(Array.isArray(obj[key]))
        if (Array.isArray(obj[key])) {
            delete obj[key]
        }
    }
}

// let obj2 =  { a: 2, b: [true, false], c: 4, d: [8, 0], e: {Branden: 'Awesome'} }

// console.log(removeArrayValues(obj2))

function removeOddValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] % 2 !== 0) {
            delete obj[key]
        }
    }
}

function isPersonOldEnoughToVote(person) {
    // TODO: 여기에 코드를 작성합니다.
    if (person['age'] >= 18) {
        return true
    } else {
        return false
    }
}

function addFullNameProperty(obj) {
    // TODO: 여기에 코드를 작성합니다.
    obj['fullName'] = obj['firstName'] + ' ' + obj['lastName']
}

// const person = {
//     firstName: 'Jade',
//     lastName: 'Smith',
//   };

//   addFullNameProperty(person);
//   console.log(person.fullName); // --> 'Jade Smith'

function removeNumbersLargerThan(num, obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] > num) {
            delete obj[key]
        }
    }
}

function countNumberOfKeys(obj) {
    let result = 0
    // TODO: 여기에 코드를 작성합니다.
    for (let key in obj) {
        result += 1
    }
    return result
}

function printObject(obj) {
    // TODO: 여기에 코드를 작성합니다.
    let result = ''
    for (let key in obj) {
        result += key + ': ' + obj[key] + '\n'
    }
    return result
}

// const obj = { name: 'Steve', age: 13, gender: 'Male' };
// let output = printObject(obj);
// console.log(output);

function getElementOfArrayProperty(obj, key, index) {
    let maybeArr = obj[key];
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(maybeArr) && maybeArr.length > index) {
        return maybeArr[index]
    } else {
        return undefined
    }
}

function select(arr, obj) {
    // TODO: 여기에 코드를 작성합니다.
    let result = {}
    for (let key in obj) {
        if (arr.includes(key)) {
            result[key] = obj[key]
        }
    }
    return result
}

function getLastElementOfProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(obj[property]) && obj[property] !== []) {
        return obj[property].pop()
    }
}

function getValueOfNthElement(arr, num) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return 'no name'
    } else if (arr.length > num) {
        console.log(1)
        return arr[num]['name']
    } else if (arr.length <= num) {
        console.log(2)
        return arr[arr.length - 1]['name']
    }
}

// console.log(getValueOfNthElement([{ name: 'Dwight' }, { name: 'Pam' }], 0))

function getAllButLastElementOfProperty(obj, key) {
    // TODO: 여기에 코드를 작성합니다.
    let result = []
    if (Array.isArray(obj[key]) && obj[key].length !== 0) {
        result = [].concat(obj[key])
        // console.log(result)
        result.pop()

    } else {
        return []
    }
    return result
}

// console.log(getAllButLastElementOfProperty({ arr: [1, 2, 4] }, 'arr'))

function extend(obj1, obj2) {
    // TODO: 여기에 코드를 작성합니다.
    let arr1 = []
    let arr2 = []
    let new_key = []
    for (let key1 in obj1) {
        arr1.push(key1)
    }
    for (let key2 in obj2) {
        arr2.push(key2)
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            new_key.push(arr2[i])
        }
    }
    for (let n = 0; n < new_key.length; n++) {
        obj1[new_key[n]] = obj2[new_key[n]]
    }
}

function countAllCharacters(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = {}
    if (str.length !== 0) {
        for (let i in str) {
            // console.log(str[i])
            if (!(str[i] in result)) {
                result[str[i]] = 1
            } else {
                result[str[i]] += 1
            }
        }
    }
    return result
}

// console.log(countAllCharacters('banana'))

function mostFrequentCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    // TODO: 여기에 코드를 작성합니다.
    let result = {}
    str = str.replace(/(\s*)/g, "")
    let max = str[0]
    if (str.length !== 0) {
        for (let i in str) {
            if (!(str[i] in result)) {
                result[str[i]] = 1
            } else {
                result[str[i]] += 1
            }
            
            for (let key in result){
                if(result[key] > result[max]){
                    max = key
                }
            }

        }
    }else{
        return ''
    }
    return max
}

// console.log(mostFrequentCharacter('really bad apple'))
console.log(mostFrequentCharacter('abcddcba'))