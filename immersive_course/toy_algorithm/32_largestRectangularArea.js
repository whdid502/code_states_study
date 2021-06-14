const largestRectangularArea = function (histogram) {
  const createMinIdxTree = (arr, segmentStart, segmentEnd) => {
    if (segmentStart === segmentEnd) return { idx: segmentStart, val: arr[segmentStart] };

    const mid = parseInt((segmentStart + segmentEnd) / 2);
    const left = createMinIdxTree(arr, segmentStart, mid);
    const right = createMinIdxTree(arr, mid + 1, segmentEnd);

    return {
      val : Math.min(left.val, right.val),
      idx : left.val < right.val ? left.idx : right.idx,
      left,
      right
    };
  };
  const getMinIdx = (treeStart, treeEnd, rangeStart, rangeEnd, tree) => {
    if (rangeStart <= treeStart && treeEnd <= rangeEnd) return tree.idx;
    if (treeEnd < rangeStart || rangeEnd < treeStart) return rangeStart;

    const mid = parseInt((treeStart + treeEnd) / 2);
    const left = getMinIdx(treeStart, mid, rangeStart, rangeEnd, tree.left);
    const right = getMinIdx(mid + 1, treeEnd, rangeStart, rangeEnd, tree.right);

    return histogram[left] < histogram[right] ? left : right;
  };
  const getRangeArea = (start, end, tree) => {
    if (start > end) return 0;

    const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);

    return Math.max(
      (end - start + 1) * histogram[minIdx],
      getRangeArea(start, minIdx - 1, tree),
      getRangeArea(minIdx + 1, end, tree)
    );
  };

  const minIdxTree = createMinIdxTree(histogram, 0, histogram.length - 1);
  
  return getRangeArea(0, histogram.length - 1, minIdxTree);
}