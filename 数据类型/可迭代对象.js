let range={
    from:1,
    to:5
}

range[Symbol.iterator]=function(){
    return {
        current:this.from,
        last:this.to,
        next(){
            if(this.current<=this.last){
                return {done:false,value:this.current++}
            } else {
                return {done:true}
            }
        }
    }

}

for(let num of range){
    console.log(num);
}
/* 1
2
3
4
5 */

//* 可迭代对象 和 类数组对象的 差异
//! 用 Array.from()方法，将一个类数组，或者可迭代对象，变成一个真正的对象，从而可以对其实现各种数组的方法 eg. push, pop, shift, unshift
let arrayLike = {
    0:'hello',
    1:'world',
    length:2
}
console.log(arrayLike); //{ '0': 'hello', '1': 'world', length: 2 }
console.log(Array.from(arrayLike)); //[ 'hello', 'world' ]
