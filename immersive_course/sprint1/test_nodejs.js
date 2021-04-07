// function hello_world(){
//  console.log('hello')
// }
// hello_world()

// let parts = ['shoulders', 'knees']
// let lyrics = ['head', ...parts, 'and', 'toes']

// console.log(lyrics)

// let arr1 = [0,1,2]
// let arr2 = [3,4,5]

// arr1 = [...arr1, ...arr2]

// console.log(arr1)

// let arr = [1, 2, 3]
// let arr2 = [...arr]
// arr2.push(4)

// console.log(arr)
// console.log(arr2)

// let obj1 = { foo: 'bar', x: 42 }
// let obj2 = { foo: 'baz', y: 13 }

// let clone_obj1 = { ...obj1 }
// let merged_obj = { ...obj1, ...obj2 }

// console.log(clone_obj1)
// console.log(merged_obj)

// function my_fun(a, b, ...manyMoreArgs) {
//   console.log('a', a)
//   console.log('b', b)
//   console.log('manyMoreArgs', manyMoreArgs)
// }

// my_fun('one', 'two', 'three', 'four', 'five', 'six')

// [a, b, ...rest] = [10, 20, 30, 40, 50]

// console.log(a) // 10
// console.log(b) // 20
// console.log(rest) // [30,40,50]
// {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}

// console.log(a)
// console.log(b)
// console.log(rest)

// function whois({displayName: displayName, fullName: {firstName: name}}){
//   console.log(displayName + " is " + name);
// }

// let user = {
//   id: 42,
//   displayName: "jdoe",
//   fullName: {
//       firstName: "John",
//       lastName: "Doe"
//   }
// };

// whois(user) 

// const array = ['code', 'states', 'im', 'course']
// const [first, ...second, last] = array

// console.log(first, second)
const student = { name: '최초보', major: '물리학과', lesson: '양자역학', grade: 'B+' }

function getSummary({ name, lesson: course, grade }) {
  return `${name}님은 ${grade}의 성적으로 ${course}을 수강했습니다`
}

console.log(getSummary(student))