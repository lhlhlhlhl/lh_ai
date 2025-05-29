const bigNum = 123456789012345678901234567890123456789n;
const theNum = BigInt(123456789012345678901234567890123456789);//不精确
const theNum2 =new BigInt("123456789012345678901234567890123456789");
//函数方式申明
console.log(bigNum,theNum,theNum2,typeof bigNum,typeof 1);
//console.log(bigNum+1)类型不同报错
console.log(bigNum+1n);