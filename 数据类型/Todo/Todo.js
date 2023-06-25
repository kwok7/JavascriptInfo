//todo 空字符串和布尔值的转换

function camelize(str){
    if(!str){ //!
        return '';
    } else {
        let arr = str.split('-');
        let temp = arr.map((item,i)=>i==0?item:item[0].toUpperCase()+item.slice(1))
        return temp.join('')

    }
}
