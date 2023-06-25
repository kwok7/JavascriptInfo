//* 添加，移除数组元素
//* splice

let arr = ["I", "go", "home"];
delete arr[1]
console.log(arr); //[ 'I', <1 empty item>, 'home' ]
console.log(arr.length); //3

//~delete obj.key 是通过 key 来移除对应的值。
//~对于对象来说是可以的。但是对于数组来说，我们通常希望剩下的元素能够移动并占据被释放的位置。我们希望得到一个更短的数组。

//* arr.splice可以做：添加，删除，和插入元素
//* arr.splice(start [,deleteCount , elem1, elem2, ..., elemN])
//* Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

let arr2 = [1,2,3]
console.log(arr2.splice(1,1,3)); //2
console.log(arr2); //[ 1, 3, 3 ]
//~当只填写了 splice 的 start 参数时，将删除从索引 start 开始的所有数组项
console.log(arr2.splice(1)); //[ 3, 3 ]
console.log(arr2); //[ 1 ]

//~我们可以将 deleteCount 设置为 0，splice 方法就能够插入元素而不用删除任何元素：
console.log(arr2.splice(1,0,2,3)); //[]
console.log(arr2); //[ 1, 2, 3 ]

//~在这里和其他数组方法中，负向索引都是被允许的。它们从数组末尾计算位置
console.log(arr2.splice(-2,2,1,1)); //[ 2, 3 ]
console.log(arr2); //[ 1, 1, 1 ]

//*slice, arr.slice([start], [end])
let arr3 = [1,2,3,4,5]
console.log(arr3.slice(0,2)); //![ 1,2 ]，end would not be included

//~我们也可以不带参数地调用它：
//~ arr.slice() 会创建一个 arr 的副本。其通常用于获取副本，以进行不影响原始数组的进一步转换。

//*concat:arr.concat(arg1, arg2...) 结果是一个包含来自于 arr，然后是 arg1，arg2 的元素的新数组。
let arr4 = [1,2]
let arr5 = [3,4]
let arr6 = [5,6]
console.log(arr4.concat(arr5,arr6,[7,[8,9]])); //![ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]，注意最后是一个数组，因此这是一个多维数组

//~ 通常，它只复制数组中的元素。其他对象，即使它们看起来像数组一样，但仍然会被作为一个整体添加：

let arr7 = [1,2]
let arrayLike = {
    0:"something",
    length: 1
}
console.log(arr7.concat(arrayLike)); //![ 1, 2, { '0': 'something', length: 1 } ]

//~但是，如果类数组对象具有 Symbol.isConcatSpreadable 属性，那么它就会被 concat 当作一个数组来处理：此对象中的元素将被添加：

let arrayLike2 = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
  };

console.log(arr7.concat(arrayLike2)); //![ 1, 2, 'something', 'else' ]

// * 遍历 forEach
//* arr.forEach方法为数组的每一个对象都运行一个函数

arr.forEach(function(item, index, array) {
    // ... do something with item
  });

let arr8 = [1,2]
arr8.forEach(function(item, index, array){console.log(item, index, array);})
/*
1 0 [ 1, 2 ]
2 1 [ 1, 2 ]
*/

arr8.forEach((ele,i,arr)=>{
    console.log(`${ele} is at index ${i} in ${arr}`);
})
/*
1 is at index 0 in 1,2
2 is at index 1 in 1,2
 */
//*还有一种方式
arr8.forEach(console.log)

//*在数组中搜索：indexOf/lastIndexOf 和 includes
//! 用法基本与字符串的方法相同
//! 请注意，indexOf 和 includes 使用严格相等 === 进行比较。所以，如果我们搜索 false，它会准确找到 false 而不是数字 0
let arr9 =[1, 0, false];
console.log(arr9.indexOf(false)); //! 2,因为这个查找使用的是 ===严格相等，所以不会返回[0]这个下标值1

//* Array.find() 方法

let arr10=[
    {id:1,name:'Mary'},
    {id:2,name:'Tara'},
    {id:3,name:'John'},
    {id:4,name:'John'}
]
console.log(arr10.find(function(item,index,array){ //{ id: 1, name: 'Mary' }
    return item.id==1
}));

console.log(arr10.find((item,index,array)=>item.id==1)); //{ id: 1, name: 'Mary' }

//! find方法一旦返回true，则停止搜索，因此只会返回第一个满足条件的元素
//! 因此，如果我们需要函数返回所有满足条件的元素组成的数组，我们需要 filter
//* 我们已知 arr10 有两个名叫 John的元素
console.log(arr10.find(item=>item.name=='John')); // {id:3,name:'John'}
console.log(arr10.filter(item=>item.name=='John')); //[ { id: 3, name: 'John' }, { id: 4, name: 'John' } ]

//* 转换数组
//* map

let arr11 = [
    {id:1,name:'Mary'},
    {id:2,name:'Tara'},
    {id:3,name:'John'}
]
console.log(`hey, i'm devider==============`);
console.log(arr11.map((item,index,array)=>{
    array.push({id:4,name:'Karen'});
    console.log(array);
}));
/*
[
    { id: 1, name: 'Mary' },
    { id: 2, name: 'Tara' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Karen' }
  ]
  [
    { id: 1, name: 'Mary' },
    { id: 2, name: 'Tara' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Karen' },
    { id: 4, name: 'Karen' }
  ]
  [
    { id: 1, name: 'Mary' },
    { id: 2, name: 'Tara' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Karen' },
    { id: 4, name: 'Karen' },
    { id: 4, name: 'Karen' }
  ]
  [ undefined, undefined, undefined ] */

//* sort(fn)
let arr12 = [1,2,15]
console.log(arr12.sort()); //[ 1, 15, 2 ]
//! 这些元素默认情况下被按字符串进行排序。
//~从字面上看，所有元素都被转换为字符串，然后进行比较。
//~对于字符串，按照词典顺序进行排序，实际上应该是 "2" > "15"。
//~要使用我们自己的排序顺序，我们需要提供一个函数作为 arr.sort() 的参数。

function compare(a,b){
    if(a>b) return 1;
    if(a == b) return 0;
    if(a<b) return -1;
}

console.log(arr12.sort(compare)); //[ 1, 2, 15 ]

[1, -2, 15, 2, 0, 8].sort(function(a,b){
    console.log(a,b);
    return a-b; //只需要返回 a-b 即可
})

//~实际上，比较函数只需要返回一个正数表示“大于”，一个负数表示“小于”。
//~ 所以，函数的返回体只需要返回 a-b 即可

//*用箭头函数会更简洁
//~ arr.sort((a,b)=>a-b)

//* reverse， 用于颠倒array中的元素，并返回 array
let arr13 = [1,2,3]
console.log(arr13.reverse()); //[ 3, 2, 1 ]

//* split,join:
//* string.split(): Split a string into substrings using the specified separator and return them as an array.
let names='Bilbo, Grandalf, Nazgul';
let arr14 = names.split(',')
console.log(arr14); //[ 'Bilbo', ' Grandalf', ' Nazgul' ]
//* split带空参数，会将字符串拆分为字母数组：
console.log('Hello'.split('')); //[ 'H', 'e', 'l', 'l', 'o' ]

//* array.join() 与 split 相反。它会在它们之间创建一串由 glue 粘合的 arr 项
console.log([ 'H', 'e', 'l', 'l', 'o' ].join('')); //Hello

//* reduce/reduceRight
//~ 当我们需要遍历一个数组时 —— 我们可以使用 forEach，for 或 for..of。
//~当我们需要遍历并返回每个元素的数据时 —— 我们可以使用 map。
//~arr.reduce 方法和 arr.reduceRight 方法和上面的种类差不多，但稍微复杂一点。它们用于根据数组计算单个值。

let value = [1,2,3].reduce((acc,item,index,array)=>{
    console.log(acc,item,index,array);
    return acc+item
},100)
/* 100 1 0 [ 1, 2, 3 ]
101 2 1 [ 1, 2, 3 ]
103 3 2 [ 1, 2, 3 ] */
console.log(value); //106
//! 但是这种使用需要非常小心。如果数组为空，那么在没有初始值的情况下调用 reduce 会导致错误。

//* Array.isArray
console.log(typeof({})); //object
console.log(typeof([])); //object
//~ 所以 typeof 不能帮助从数组中区分出普通对象：
//~ 但是数组经常被使用，因此有一种特殊的方法用于判断：Array.isArray(value)
console.log(Array.isArray([1,2])); //true
console.log(Array.isArray([])); //true
console.log(Array.isArray({})); //false
//~ 如果 value 是一个数组，则返回 true；否则返回 false。

//todo 任务

//*将 border-left-width 转换成 borderLeftWidth
function camelize(str){
    if(!str){
        return;
    } else {
        let arr = str.split('-');
        let temp = arr.map((item,i)=>i==0?item:item[0].toUpperCase()+item.slice(1))
        return temp.join('')

    }
}

console.log(camelize('background-color')); //backgroundColor

//过滤范围
function filterRange(arr,a,b){
    return arr.filter((item)=>item>=a&&item<=b)

}
let arr15 = [5, 3, 8, 1];
let filtered = filterRange(arr15, 1, 4);
console.log(filtered); //[ 3, 1 ]
console.log(arr15); //[ 5, 3, 8, 1 ]

//降序排列
let arr16 = [5, 2, 1, -10, 8];
console.log(arr16.sort((a,b)=>b-a)); //[ 8, 5, 2, 1, -10 ]

//复制和排序数组
let arr17 = ["HTML", "JavaScript", "CSS"]
//todo console.log(arr17.sort()) //!不对，因为 arr.sort方法会改变原数组
//! 正确方式，想办法建立一个原数组的拷贝，比较合适的方法： arr17.slice()
console.log(arr17.slice().sort()); //[ 'CSS', 'HTML', 'JavaScript' ]
//~它会返回一个新数组，将所有从索引 start 到 end（不包括 end）的数组项复制到一个新的数组。
console.log(arr17); //[ 'HTML', 'JavaScript', 'CSS' ]
