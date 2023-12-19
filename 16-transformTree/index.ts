function transformTree(tree) {
  const subTree = (tree, i) => {
    if (tree[i] == null || tree[i] == undefined) return null;
    return {
      value: tree[i],
      left: subTree(tree, 2 * i + 1),
      right: subTree(tree, 2 * (i + 1)),
    };
  };

  return subTree(tree, 0);
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
