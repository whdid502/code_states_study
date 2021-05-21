const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let stack = []
  let brankets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for(let i = 0 ; i < str.length ; i ++){
    if(str[i] === '(' || str[i] === '{' || str[i] === '['){
      stack.push(str[i])
    }
    else if(str[i] === ')' || str[i] === '}' || str[i] === ']'){
      let recent = stack.pop()

      if(str[i] !== brankets[recent]){
        return false
      }
    }
  }
  if(stack.length !== 0){
    return false
  }
  else{
    return true
  }
};
