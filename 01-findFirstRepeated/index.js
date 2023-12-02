function findFirstRepeated(gifts) {
  const acum = [];
  for (const gift of gifts) {
    if (acum.includes(gift)) {
      return gift;
    }
    acum.push(gift);
  }
  return -1;
}