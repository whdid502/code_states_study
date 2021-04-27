const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  // 이중루프 x
  // sample idx를 0으로 시작
  // base를 루프를 돌아서
  // 일치하거나, 작거나, 크거나
  // 일치하면 일치카운트 ++
  // 작으면 패스
  // 크면 스톱 하고 sample idx ++
  // 일치카운트가 sample개수와 같아진다면 true
  let sampleIdx = 0
  let count = 0
  let result = false
  base.sort((a, b) => a - b)
  sample.sort((a, b) => a - b)
  // console.log(base)
  let recursion = function (base, sampleIdx) {
    console.log(base)
    if(count === sample.length){
      result = true
      return result
    }
    for (let i = 0; i < base.length; i++) {
      if (sample[sampleIdx] === base[i]) {
        count++
        sampleIdx++
        base = base.slice(i+1)
        recursion(base,sampleIdx)
      }
      else if (sample[sampleIdx] > base[i]) {
        sampleIdx++
        base = base.slice(i+1)
        return recursion(base, sampleIdx)
      }
    }
  }
  recursion(base, sampleIdx)
  return result
};

let base = [10, 99, 123, 7];
let sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false

let base2 = [1, 2, 3, 4, 5];
let sample2 = [1, 3];
let output2 = isSubsetOf(base2, sample2);
console.log(output2); // --> true

const isSubsetOf = function (base, sample) {
  // naive solution: O(M * N)
  // return sample.every((item) => base.includes(item));

  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};