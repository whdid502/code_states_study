const inequalityNumber = function (signs) {
  const search = (index, signs, number, visit, result) => {
    if(index === signs.length) {
      return parseInt(result.join(''));
    }
    const sign = signs[index];
    for(let i = 0; i < number.length; i++) {
      const right = number[i];
      if(visit[right]) continue;
      if(index >= 0) {
        const left = result[result.length - 1];
        if(sign === "<" && left >= right) continue;
        if(sign === ">" && left <= right) continue;
      }
      visit[right] = true;
      const next = search(index + 1, signs, number, visit, result.concat(right));
      if(next !== undefined) {
        return next;
      }
      visit[right] = false;
    }
    return undefined
  }
  signs = signs.split(' ');
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const visit = Array(10).fill(false);
  const min = search(-1, signs, number, Array(10).fill(false), []);
  const max = search(-1, signs, number.reverse(), Array(10).fill(false), []);
  return max - min;
};