function calculate(n1, operator, n2) {
    let result;
    // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
    // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
      if (operator === '+'){
        result = parseFloat(n1) + parseFloat(n2)
      }else if(operator === '-'){
        result = parseFloat(n1) - parseFloat(n2)
      }else if(operator === '*'){
        result = parseFloat(n1) / parseFloat(n2)
      }else if(operator === '/'){
        result = parseFloat(n1) / parseFloat(n2)
        result = result.toFixed(2)
      }
    return String(result);
  }

  console.log(calculate('1','/','7'))