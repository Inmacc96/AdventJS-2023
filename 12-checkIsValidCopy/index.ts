function checkIsValidCopy(original, copy) {
  const originalArray = [...original];
  const copyArray = [...copy];

  if (originalArray.length !== copyArray.length) return false;

  for (let i = 0; i <= originalArray.length - 1; i++) {
    if (originalArray[i] !== copyArray[i]) {
      if (/[0-9\s]/g.test(originalArray[i])) {
        return false;
      }
      if (/[A-Z]/g.test(originalArray[i])) {
        if (
          /[a-z]/g.test(copyArray[i]) &&
          originalArray[i].toLowerCase() !== copyArray[i].toLowerCase()
        ) {
          return false;
        }
        if (["#", "+", ":", ".", " "].includes(copyArray[i])) {
          break;
        }
      }
      if (
        /[a-z]/g.test(originalArray[i]) &&
        !["#", "+", ":", ".", " "].includes(copyArray[i])
      ) {
        return false;
      }
    }
  }
  return true;
}

function checkIsValidCopy2(original, copy) {
  return (
    [...original].length === [...copy].length &&
    [...copy].every((char, index) => {
      if (/[a-zA-Z#+:.]/.test(original.at(index))) {
        return [
          original.at(index),
          original.at(index).toLowerCase(),
          "#",
          "+",
          ":",
          ".",
          " ",
        ].includes(char);
      }
      return char === original.at(index);
    })
  );
}