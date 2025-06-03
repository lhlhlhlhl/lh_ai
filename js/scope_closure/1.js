function bar(){
   console.log(myName);
} 
function foo(){
    var myName="极客";
    console.log(myName);
    bar();
}
var myName="骑士"
foo()
