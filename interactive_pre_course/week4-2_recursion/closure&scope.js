// // let brave_girls = 'rollin'
// // function k_pop(){
// //  let brave_girls = 'just dirve'
// //  console.log(brave_girls)
// // }
// // k_pop()
// // console.log(brave_girls)

// // let chicken = 'nene'

// // {
// //   let chicken = 'kychon'
// //   console.log(chicken)
// // }
// // console.log(chicken)

// // function pizza(){
// //   domino = 'is good'
// // }

// // pizza()

// // console.log(domino)

// // let dismas = 'live'

// // function condition_dismas(){
// //   console.log(dismas)
// // }

// // function kill_dismas(){
// //   dismas = 'die'
// //   condition_dismas();
// // }
// // kill_dismas()

// // let dismas = 'live'
// // function condition_dismas(){
// //  console.log(dismas)
// // }
// // function kill_dismas(){
// //  let dismas = 'die'
// //  condition_dismas();
// // }
// // kill_dismas() // 'die'

// // function outter_fn() {
// //   let printing = 'im outter'
// //   function inner_fn() {
// //     console.log(printing)
// //   }
// //   inner_fn();
// // }
// // outter_fn(); // 'im outter'

// // function outter_fn() {
// //   let printing = 'im outter'
// //   return function () {
// //     console.log(printing)
// //   }
// // }
// // inner_fn = outter_fn()
// // inner_fn(); // 'im outter'

// // // HTML
// // <button onclick='print()'>버튼</button>
// // // JS
// // let click = (function () {
// //   //클릭한 수를 카운팅
// //   let count = 0
// //   return function () {
// //     count++
// //     return count
// //   }
// // })()
// // function print() {
// //   console.log(click())
// // }

// function factory_movie(title){
//   return {
//       get_title : function (){
//           return title;
//       },
//       set_title : function(_title){
//           title = _title
//       }
//   }
// }
// ghost = factory_movie('Ghost in the shell');
// matrix = factory_movie('Matrix');

// alert(ghost.get_title());
// alert(matrix.get_title());

// ghost.set_title('공각기동대');

// alert(ghost.get_title());
// alert(matrix.get_title());

// var arr = []
// for(var i = 0; i < 5; i++){
//     arr[i] = function(){
//         return i;
//     }
// }
// for(var index in arr) {
//     console.log(arr[index]());

//     var arr = []
// for(var i = 0; i < 5; i++){
//     arr[i] = function(id) {
//         return function(){
//             return id;
//         }
//     }(i);
// }
// for(var index in arr) {
//     console.log(arr[index]());
// }