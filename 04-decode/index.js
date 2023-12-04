function decode(message) {
  const regex = /(\([^\(]*?\))/g;
  const replacer = (s) => {
    return s
      .slice(1, s.length - 1)
      .split("")
      .reverse()
      .join("");
  };
  
  return message
    .replaceAll(regex, replacer)
    .replaceAll(regex, replacer)
    .replaceAll(regex, replacer);
}