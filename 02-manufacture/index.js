function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    gift.split("").every((char) => materials.includes(char))
  );
}
