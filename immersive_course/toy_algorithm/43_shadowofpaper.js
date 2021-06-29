function shadowOfPapers(papers) {
  // 주어진 사각형의 정보를 각 좌표의 시작과 끝을 나타내는 좌표로 변경하여 저장한다.
  const coordinates = [];
  papers.forEach((p) => {
    const [x, y, width, height] = p;
    // 사각형의 시작점의 x좌표, 하단 y좌표, 상단 y좌표, 사각형의 시작을 알리는 flag
    coordinates.push([x, y, y + height - 1, 1]);
    // 사각형의 마지막점의 x좌표, 하단 y좌표, 상단 y좌표, 사각형의 마지막을 알리는 flag
    // x좌표는 너비 계산에 누락을 방지하기 위해 범위로 저장한다.
    coordinates.push([x + width, y, y + height - 1, -1]);
  });

  // x축을 기준으로 정렬한다.
  const sorted = mergeSort(coordinates, (c) => c[0]);
  // 좌표 평면을 좌측에서 우측으로 순회하면서 매좌표까지 사각형이 차지하는 y좌표를 저장한다.
  const height = Array(10000 + 1).fill(0);
  for (let y = sorted[0][1]; y <= sorted[0][2]; y++) height[y] = 1;
  let sum = 0;
  for (let i = 1; i < sorted.length; i++) {
    // 겹치는 부분을 제외하고 순수하게 높이만 구한다.
    const h = height.reduce((acc, cur) => acc + (cur === 0 ? 0 : 1), 0);
    const x2 = sorted[i][0];
    const x1 = sorted[i - 1][0];
    sum = sum + (x2 - x1) * h;

    const y1 = sorted[i][1];
    const y2 = sorted[i][2];
    // 사각형은 서로 겹칠 수 있으므로, 누적값을 저장해야 한다.
    for (let y = y1; y <= y2; y++) height[y] += sorted[i][3];
  }
  return sum;
}