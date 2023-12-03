function findNaughtyStep(original, modified) {
  let modifiedCopy = modified.split("");
  if (original === modified) return "";

  if (original === "") return modified;

  for (const char of original) {
    if (modifiedCopy.includes(char)) {
      modifiedCopy.splice(modifiedCopy.indexOf(char), 1)
    } else {
      return char;
    }
  }

  return modifiedCopy[0];
}