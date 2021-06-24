let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.

  if (str === '') return 0;
  
  for (let i = str.length; i >= 0; i--) {
    for (let j = 0; j <= str.length - 1; j++) {
      if (str.substr(j, i) === str.substr(j, i).split('').reverse().join('')) {
        return i;
      }
    }
  }
}