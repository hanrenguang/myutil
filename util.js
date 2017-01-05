var myutil = {};

//去除字符串中的所有空格，join方法性能更好，个人推测是apply操作this较慢
myutil.trim = function (str) {
    //return "".concat.apply("", str.split(" "));
    return str.split(" ").join("");
};

/*
*将字符串变为驼峰命名形式
*variable为要处理的字符串
*separator为各个名词之间的分隔符
*如："get-element-by-id" -> myutil.toTuoFeng("get-element-by-id", "-")
*/
myutil.toTuoFeng = function (variable, separator) {
    variable = variable.split(separator);
    var len = variable.length,
          i = 1;
    variable[0] = variable[0][0].toLowerCase() + variable[0].slice(1);
    while(--len) {
        variable[i] = variable[i][0].toUpperCase() + variable[i].slice(1);
        i++;
    }
    return variable.join("");
}