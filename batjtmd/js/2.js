const arr=['1','2','3'];
console.log(typeof arr);//object
const date=new Date();
console.log(typeof date);//object
const obj={};
console.log(typeof obj);//object
//如何区分object 的这些类型  
// [object Array]
// [object Date]
// 1.constructor 2. instanceof 3. Object.prototype.toString.call()
console.log(Object.prototype.toString.call(arr));//[object Array]
console.log(typeof Object.prototype.toString.call(date));//String
//会在MDN文档看一些资料
function getType(vale){
    //String api 的选择
    //spilt + substring
        const type=Object.prototype.toString.call(vale);
        console.log(typeof type);//[object Array]
        return type.slice(8,-1);//截取字符串
    //return Object.prototype.toString.call(vale).slice(8,-1);//截取字符串

}
console.log(getType(arr));//Array