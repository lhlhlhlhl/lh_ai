async function foo() {
  const a = await bar()
  return a + 1
}
function foo() {
  return new Promise((resolve, reject) => {
    bar().then(a => {
      resolve(a + 1)
    }).catch(reject)
  })
}