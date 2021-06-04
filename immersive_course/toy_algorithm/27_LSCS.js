const LSCS = function (arr) {
  let subArrSum = arr[0];
  let max = arr[0]; // 정답의 후보를 저장
  for (let i = 1; i < arr.length; i++) {
    // subArrSum는 바로 직전의 요소까지 검토했을 때 가장 연속합
    // 연속합에 추가로 검토하는 요소, 즉 arr[i]를 더하는 것보다
    // arr[i] 하나의 값이 더 큰 경우 (subArrSum가 음수일 경우)
    // subArrSum를 버리는 게 좋다.
    // 쭉 더해서 음수인 부분은 굳이 더할 필요가 없다.
    subArrSum = Math.max(subArrSum + arr[i], arr[i]);
    max = Math.max(max, subArrSum);
  }

  return max;
};