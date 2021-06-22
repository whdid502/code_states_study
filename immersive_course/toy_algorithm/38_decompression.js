const decompression = function (image) {
  // 재귀를 위한 보조 함수
  // 파라미터는 차례대로 y좌표의 시작(Row Start), y좌표의 끝(Row End), x좌표의 시작(Col Start), x좌표의 끝(Col End)
  const aux = (rs, re, cs, ce, image) => {
    // base case
    // 각 좌표에는 number 타입이 저장되어 있다.
    if (rs === re) return String(image[rs][cs]);

    // 좌상, 우상, 좌하, 우하로 구분한다.
    const midRow = Math.floor((rs + re) / 2);
    const midCol = Math.floor((cs + ce) / 2);
    const leftUpper = aux(rs, midRow, cs, midCol, image);
    const rightUpper = aux(rs, midRow, midCol + 1, ce, image);
    const leftDown = aux(midRow + 1, re, cs, midCol, image);
    const rightDown = aux(midRow + 1, re, midCol + 1, ce, image);

    // 주어진 사각형 전체를 순회하고 나서 재귀를 하거나
    // 4등분한 각 사각형을 각각 순회하고 나서 재귀를 하는 방식은 데이터를 중복 조회하게 된다.
    // 재귀적으로 각 결과를 합치면서 계산하면 모든 좌표를 한 번씩만 검토하면 된다.
    const result = leftUpper + rightUpper + leftDown + rightDown;
    if (result === '1111') return '1';
    else if (result === '0000') return '0';
    else return 'X' + result;
  };

  return aux(0, image.length - 1, 0, image.length - 1, image);
};