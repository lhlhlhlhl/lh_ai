interface Animal {
  name: string
}

interface Animal {
  age: number
}

const dog: Animal = { name: '旺财', age: 1 }

//type不能重复声明
// type AnimalType = {name:string}
// type AnimalType = {age:number}

