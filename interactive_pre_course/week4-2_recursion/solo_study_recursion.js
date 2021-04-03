// function add(){
//   add();
// } 

// function factorial(fnum){
//   end_num = 1;
//   if(fnum == end_num) return end_num;
//   else return fnum*factorial(fnum-1);
// }
// document.write(factorial(3));

// for(let name in Node){
//   console.log(name, Node[name]);
// }

// // //ELEMENT_NODE 1 
// // ATTRIBUTE_NODE 2 
// // TEXT_NODE 3 
// // CDATA_SECTION_NODE 4 
// // ENTITY_REFERENCE_NODE 5 
// // ENTITY_NODE 6 
// // PROCESSING_INSTRUCTION_NODE 7 
// // COMMENT_NODE 8 
// // DOCUMENT_NODE 9 
// // DOCUMENT_TYPE_NODE 10 
// // DOCUMENT_FRAGMENT_NODE 11 
// // NOTATION_NODE 12 
// // DOCUMENT_POSITION_DISCONNECTED 1 
// // DOCUMENT_POSITION_PRECEDING 2 
// // DOCUMENT_POSITION_FOLLOWING 4 
// // DOCUMENT_POSITION_CONTAINS 8 
// // DOCUMENT_POSITION_CONTAINED_BY 16 
// // DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC 32

// function factorial(n){
//   let result = 1;
//   for(let i = n;i>=1;i--){
//     result *=i;
//   }
//   return result;
// }

// function factorial(n){
//   // Base case, termination case : 결과를 예상할수있는 곳에 끝내는 구간을 설정 
// 	if( n === 1 ){
//     return 1;
//   }
//   return n * factorial(n-1);
// }

// function logAll(el){
//   console.log(el.tagName); // el 태그 이름 콘솔
//   if(el.children.length){ // el의 자식태그가 있다면
//     for(let i = 0; i < el.children.length; i++){ // 자식태그 수만큼 for문
//       const child = el.children[i]; 
      
//       console.log(child.tagName); // el의 자식태그 이름 콘솔
      
//       if(child.children.length){ // el의 자식의 자식태그가 있다면
//         for (let j = 0; j < child.children.length; j++) {
//           const grandChild = child.children[j];

//           console.log(grandChild.tagName);
          
//           //if (){}  ...   
          
//           //
//       }
//     }
//   }
// }