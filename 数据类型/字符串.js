let str=`sts`;
let startPos = 0;
let char = `s`;

while(true){
  let foundPros = str.indexOf(char,startPos);
  if(foundPros>-1){
    console.log(foundPros)
    startPos = foundPros+1;


  } else break;
}

console.log(`str`.indexOf(`s`,0));

if(`str`.indexOf(`s`,0)){console.log(true)}else{console.log(false)}

//有个更好的方法，就是includes, startsWith, endsWith
//因为这个方法返回true, false

console.log(`str`.includes(`e`,0)) //false
console.log(`str`.includes(`s`,0)) //true
//以下用作布尔值判断就更方便了
if(`str`.includes(`s`,0)){
    //do something
}
//因为s字符哎str的起始位置，0，但是它只会返回true，因此用作布尔判断的时候，比较适合

//*但是，includes方法只能返回true/false，不能类似于indexOf方法返回具体的位置

//:str.startsWith  && str.endsWith 方法
console.log(`is Widget starts with empty string?:`+`Widget`.startsWith(``)) //true
console.log(`is str.startsWith function capital sensitive?: ${!'Widget'.startsWith('wid')}`) //!true

//！仔细看这里用了反引号作为模板表达式，里面嵌入了计算，并且结果取反，更符合console.log的内容语义

//*h获取子字符串 substr, substring, slice

let str2 = 'stringify'
console.log(str2.slice(0,[str2.length-1])) //stringif
console.log(str2.slice(0,[str2.length])) //stringify
console.log(str2.slice(0,[str2.length+1])) //stringify

//*如果 slice不给第二个end参数，那就默认为运行到字符串末尾，就是 str.length
console.log(str2.slice(0)) //stringigy

//* start, end也有可能是负值，意思就是起始位置从字符串结尾计算：

console.log(str2.slice(-2, -1)) //f
console.log(str2.slice(-2,-3)) //''，也就是说，如果start 大于 end部分，则返回空字符串

console.log(str2.slice(3,2)); //''

//* str.substring
console.log(str2.substring(3,2)); //'r'， substring允许 start 大于 end
//! 但是 substring不支持负数的参数，负数参数会被当作是0处理

//* str.substr(start, [,length]) 返回从start开始的指定长度字符串


//*比较字符串

console.log('z'>'A'); //true，因为字符串按字母顺序比较，而且小写字母总是大于大写字母
console.log('Österreich' > 'Zealand' ); // true

//* str.codePointAt(pos)，返回在pos位置的字符代码
console.log('z'.codePointAt(0)); //122
console.log('Z'.codePointAt(0)); //90

console.log('test'.codePointAt(2)); //'s': 打印出115
console.log('s'.codePointAt(0)); //115

//* String.fromCodePoint(code)，同上面相反
console.log(String.fromCodePoint(90)); //'Z' 大写'Z'


let str3 = ''
for(let i=65; i<220; i++){
  str3+=String.fromCodePoint(i);
}

console.log(str3);

//* str.localeCompare(str2)
console.log('a'.localeCompare('A'));  //-1
console.log('A'.localeCompare('a')); //1

//练习

//todo:写一个函数 ucFirst(str)，并返回首字母大写的字符串 str
function ucFirst(str){
  return str[0].toUpperCase()+str.slice(1);
}

console.log(ucFirst('test')); // Test
//! 这里存在一个问题，就是如果str是undefined，那么str[0].toUpperCase()就会报错，因此正确的方式是：


function ucFirst_1(str){
  if(!str){
    return str;
  }else{
    return str[0].toUpperCase()+str.slice(1);
  }
}

console.log(`我是空字符串:'${ucFirst_1('')}'`); //''

//todo:写一个函数 checkSpam(str)，如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。函数必须不区分大小写：
function checkSpan(str){
  if(!str){
    return false;
  }else{
    return str.toLowerCase().includes('viagra')||str.toLowerCase().includes('xxx');
  }
}


//todo:创建函数 truncate(str, maxlength) 来检查 str 的长度，如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。
//todo:函数的结果应该是截断后的文本（如果需要的话）。
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}







//* important information
//! deprecated method, do not use
//? should this method to be deposed in the public api?
//todo: refactor this method
//// deleted things