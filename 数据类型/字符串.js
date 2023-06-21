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
console.log(`is Widget starts with empty string?:`+`Widget`.startsWith(``))
console.log(`is str.startsWith function capital sensitive?: ${!'Widget'.startsWith('wid')}`)


//* important information
//! deprecated method, do not use
//? should this method to be deposed in the public api?
//todo: refactor this method
//// deleted things