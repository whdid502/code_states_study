const rangeMinimum = function (arr, ranges) {
  return ranges.map((range) => {
    const [start, end] = range;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = start; i <= end; i++) {
      if (arr[i] < min) min = arr[i];
    }
    return min;
  });
};
