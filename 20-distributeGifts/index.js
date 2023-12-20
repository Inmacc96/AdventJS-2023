function distributeGifts(weights) {
  const result = Array.from({ length: weights.length }, () =>
    Array.from({ length: weights[0].length }, () => 0)
  );

  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights[i].length; j++) {
      const neighbours = [
        weights[i][j - 1],
        weights[i][j + 1],
        weights[i][j],
        weights[i + 1]?.[j],
        weights[i - 1]?.[j],
      ].filter((x) => x !== undefined && x !== null);

      result[i][j] = Math.round(
        neighbours.reduce((acum, val) => acum + val, 0) / neighbours.length
      );
    }
  }
  return result;
}