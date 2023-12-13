function drawGift(size, symbol) {
    let giftUp = "";
  
    if (size === 1) return "#\n";
  
    giftUp += " ".repeat(size - 1) + "#".repeat(size) + "\n";
  
    for (let i = 1; i < Math.floor((2 * size - 1) / 2); i++) {
      giftUp +=
        " ".repeat(size - i - 1) +
        "#" +
        symbol.repeat(size - 2) +
        "#" +
        symbol.repeat(i - 1) +
        "#" +
        "\n";
    }
    giftUp += "#".repeat(size) + symbol.repeat(size - 2) + "#" + "\n";
  
    for (let i = Math.floor((2 * size - 1) / 2) - 1; i > 0; i--) {
      giftUp +=
        "#" +
        symbol.repeat(size - 2) +
        "#" +
        symbol.repeat(i - 1) +
        "#" +
        "\n";
    }
  
    giftUp += "#".repeat(size) + "\n";
  
    return giftUp;
  }