//* 对象可以存储键值集合，但是没有办法存储有序列表，比如用户，商品以及html元素
//* 这个时候 数据结构数组 Array 就派上用场了

//* 声明数组

let arr1 = new Array(); //使用构造函数方法
let arr2 = []; // 大部分使用这个方法

let arrFruit = ['apple','pear','banana']

console.log(arr1, arr2, arrFruit);
console.log(arrFruit[0]); //apple，可以用下标来获取元素
console.log(arrFruit[arrFruit.length]); // undefined，超出集合范围的元素，显示为 undefined

arrFruit[0] = 'orange';
console.log(arrFruit); //[ 'orange', 'pear', 'banana' ] ,可以用下标来获取，并且更新元素值
arrFruit[3] = 'lemon';
console.log(arrFruit); //[ 'orange', 'pear', 'banana', 'lemon' ] 可以向数组添加新元素

arrType = ['apple',3, {name:'John',gender:'male'},true, function(){console.log('i am a function!');}]
//数据可以存储任何类型的元素
console.log(arrType);
/* [
    'apple',
    3,
    { name: 'John', gender: 'male' },
    true,
    [Function (anonymous)]
  ] */

console.log(arrType[2].name); // John

arrType[arrType.length-1](); //i am a function!

//* 获取数组重的最后一个元素 "at" || arr[arr.length-1]
console.log(arrFruit[arrFruit.length -1]); //lemon，但是这个方法相对复杂，需要把数组名打两边
console.log(arrFruit.at(-1)); //lemon，新的js方法，但是旧浏览器可能需要polyfills
//todo what is polyfills??
//*array.at(i)，如果i>0，则使用方式和下标一样 arrat[i]，但如果i<0，则它从数组的尾部向前数，具体见下
console.log(arrFruit); //[ 'orange', 'pear', 'banana', 'lemon' ]
console.log(arrFruit.at(-2), arrFruit[2]); //banana banana

//! pop/push, shift/unshift
//* queue, push/shift : first in first out
//* stack，push/pop: last in first out
//* js中的数组，既可以用作queue，也可以用作 stack，允许这样操作的数据结构被称为 双端队列: deque

//* arrFruit [ 'orange', 'pear', 'banana', 'lemon' ]

//* Array.pop() pop翻译：突然从某物中出来，蹦出，离开，脱落
console.log(arrFruit.pop(), arrFruit); // lemon , [ 'orange', 'pear', 'banana' ]
//* arr.pop(),remove the last ele of array and return it, if arr is empty, it would return undefined;
console.log([].pop()); //undefined

//* Arrary.push(): Appends new elements to the end of an array, and returns the new length of the array.
addedFruit = ['apple','lemon',{isTasty:true}]
console.log(arrFruit.push(...addedFruit) ); //6
console.log( arrFruit); //[ 'orange', 'pear', 'banana', 'apple', 'lemon', { isTasty: true } ]

//* Array.shift()： Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arrFruit.shift()); //orange
console.log(arrFruit); // [ 'pear', 'banana', 'apple', 'lemon', { isTasty: true } ] 第一个orange被移除了

//* Array.unshift(): Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arrFruit.length); //5
console.log(arrFruit.unshift('avocado')); //6

//* 数组的本质是对象，通过对对象的扩展，提供了特殊的方法来处理有序的数据集合，以及length属性，但从本质上讲，它仍然是一个对象
//* 例如，数组是通过引用来复制的
let fruits = ['banana']
let arr3 = fruits // 通过引用复制 (两个变量引用的是相同的数组)
fruits.push('orange')
console.log(arr3); //banana,orange


//! 数组误用的几种方式:
/* 添加一个非数字的属性，比如 arr.test = 5。
制造空洞，比如：添加 arr[0]，然后添加 arr[1000] (它们中间什么都没有)。
以倒序填充数组，比如 arr[1000]，arr[999] 等等。 */

//! 性能： push/pop 方法运行的比较快，而 shift/unshift 比较慢。

//* 数组的循环
let arr4 =  ["Apple", "Orange", "Pear"];
for(let i = 0;i<arr4.length;i++){
    console.log(arr4[i]);
} //apple orange pear

//*  但对于数组来说还有另一种循环方式，for..of:
for(let fruit of arr4){
    console.log(fruit);
} //apple orange pear

//* for... in 因为数组也是对象，所以使用 for..in 也是可以的：
for(let fruit in arr4){
    console.log(fruit); //! 0, 1, 2 因为作为对象的循环方式，打印出来的是对象的key值，也就是 0， 1， 2
}
//!所以需要做一些修改
for(let key in arr4){
    console.log(arr4[key]); //apple orange pear
}
//! 但是这会引起一些潜在的问题：
//1. for... in会遍历所有的属性，不止是这些数字属性
//2. for..in循环适用于普通对象，对数组的速度要慢10-100倍
//因此，通常我们用 for of来处理数组

//! 关于length
//*1. 当我们修改数组的时候, length会自动更新，这个值并不是数组集合的个数，而是数组最大的索引值+1
let arr5 = ['banana']
arr5[2] = 'orange'
console.log(arr5); //[ 'banana', <1 empty item>, 'orange' ]
console.log(arr5.length); //3

// *2. Array.length这个值是可写的，当length值大于数组长度，不会发生什么
// 已知 arr5.length = 3;
arr5.length = 4;
console.log(arr5); //[ 'banana', <1 empty item>, 'orange', <1 empty item> ]
console.log(arr5.length); //4
//* 但是如果length值小于数组长度，则数组会被截断
arr5.length = 2;
console.log(arr5); //[ 'banana', <1 empty item> ]
console.log(arr5.length); //2
//* 并且这个行为是不可逆的，也就是说被截断的数据，无法使用length属性的修改，把他们找回来
arr5.length = 4;
console.log(arr5); //[ 'banana', <3 empty items> ],原本是 [ 'banana', <1 empty item>, 'orange', <1 empty item> ]
//* 清空数组的方法： Array.length = 0
arr5.length = 0; //通过截断，把数组内容清空


//* 多维数组
let matrix = [
    [[1,1,1],2,3],[4,5,6],[7,8,9]
]
console.log(matrix[1][1]); //5

//* toString: 数组有自己的 toString 方法的实现，会返回以逗号隔开的元素列表
console.log(matrix.toString()); //1,1,1,2,3,4,5,6,7,8,9


//*任务
/* 我们试试下面的 5 个数组操作。

创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
将 “Rock-n-Roll” 从数组末端添加进去。
用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
去掉数组的第一个值并显示它。
在数组前面添加 Rap 和 Reggae。
过程中的数组： */
let styles = ['Jazz','Blues']
styles.push('Rock-n-Roll')
function replaceMiddleElement(arr){
    if(arr.length%2==0){
        return;
    } else {
        arr[(arr.length-1)/2]= 'Classics'
    }
}
replaceMiddleElement(styles);
console.log(styles.shift());
styles.unshift('Rap','Reggae');
console.log(styles); //Rap, Reggae, Classics, Rock-n-Roll

