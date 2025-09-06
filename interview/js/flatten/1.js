const flatten = (arr) => {
  let res = []
  for (let item of arr) {
    console.log(item, '///')
    if (Array.isArray(item)) {
      // console.log(item)
      res = res.concat(flatten(item))
    } else {
      res.push(item)//一直递归，直到item不是数组
    }
  }
  return res
}
flatten([1, 2, 3, [4, 5, 6]])