const robotPath2 = function (room, src, sDir, dst, dDir) {
  const R = room.length;
  const C = room[0].length;
  const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
  ];

  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  const directions = [];
  const dist = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  const queue = Array(R * C);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    queue[rear] = pos;
    rear++;
  };
  const deQueue = (queue) => {
    const pos = queue[front];
    front++;
    return pos;
  };

  const [sRow, sCol] = src;
  directions[sRow][sCol] = sDir;
  dist[sRow][sCol] = 0;

  const [dRow, dCol] = dst;

  enQueue(queue, [sRow, sCol]);
  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    const dir = directions[row][col];

    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;
      const nRow = row + rDiff;
      const nCol = col + cDiff;

      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;
      const dDiff = Math.abs(nDir - dir);
      let candidate;
      if (dDiff === 0) {
        candidate = dist[row][col] || 1;
      } else if (dDiff === 2) {

        candidate = dist[row][col] + 3;
      } else {

        candidate = dist[row][col] + 2;
      }

      if (candidate < dist[nRow][nCol]) {

        enQueue(queue, [nRow, nCol]);
        dist[nRow][nCol] = candidate;

        directions[nRow][nCol] = nDir;
      }

      if (nRow === dRow && nCol === dCol) {
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          return dist[dRow][dCol];
        } else if (dDiff === 2) {
          return dist[dRow][dCol] + 2;
        } else {
          return dist[dRow][dCol] + 1;
        }
      }
    }
  }
};