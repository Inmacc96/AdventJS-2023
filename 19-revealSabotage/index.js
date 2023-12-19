function revealSabotage(store) {
  const result = Array.from({ length: store.length }, () =>
    Array.from({ length: store[0].length }, () => "")
  );
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] !== "*") {
        const count = [
          store[i]?.[j - 1],
          store[i]?.[j + 1],
          store[i + 1]?.[j],
          store[i + 1]?.[j - 1],
          store[i + 1]?.[j + 1],
          store[i - 1]?.[j],
          store[i - 1]?.[j - 1],
          store[i - 1]?.[j + 1],
        ].filter((v) => v === "*").length;

        if (count > 0) {
          result[i][j] = count.toString();
        }
      }
    }
  }
  return result;
}
