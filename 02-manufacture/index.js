function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    gift.split("").every((word) => materials.includes(word))
  );
}
