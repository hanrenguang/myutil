// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    if(Array.isArray) { // 内置判断函数
        return Array.isArray(arr);
    }

    // 数组则返回"[object Array]"
    return Object.prototype.toString.call(arr) === "[object Array]";

    // instanceof 是根据原型链来判断的
    // 不使用instanceof操作符是由于在多个iframe中
    // 跨iframe实例化的对象彼此是不共享原型链的
    // 故使用instanceof有风险
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return typeof fn === "function";
}

// 判断是否为对象
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不包含函数、正则对象等
function cloneObject(src) {
    // 作为返回对象
    if(typeof src === null || typeof src !== "object") {
        return src;
    }

    var result = isObject(src) ? {} : []; // 判断参数为数组或对象

    for(var item in src) {
        if( isObject(src[item]) ) { // 若为对象
            result[item] = cloneObject(src[item]);
        }
        else if( isArray(src[item]) ) { // 若为数组
            result[item] = cloneObject(src[item]);
        }
        else { // 其他
            result[item] = src[item];
        }
    }

    return result;
}

// 对数组进行去重操作，只考虑数组中元素全为数字或全为字符串，且每个重复的数最多出现两次，返回一个去重后的数组
/*function uniqArray(arr) {
    // 使用 hash 数组来解决
    // hash 数组结构为二维数组
    // 例：hash[0][0] 存数组元素
    // *** hash[0][1] 存该元素在数组中出现次数
    // *** hash[0][2] 存该元素在原数组中的索引
    var hash = [];
    var len = arr.length;

    for(var i = 0; i < len; i++) {
        for(var j = 0; j < hash.length; j++) {
            if(arr[i] === hash[j][0]) { // 重复
                hash[j][1]++;
                break;
            }
        }

        if(j === hash.length) {  // 第一次出现
            hash[j] = new Array(arr[i], 1, i);
        }
    }

    for(i = hash.length-1; i >= 0; i--) { // 在这里需要注意一个顺序的问题，如果把前面的数删了，后面的数的索引也会改变
        if(hash[i][1] !== 1) {
            arr.splice(hash[i][2], 1);
        }
    }

    return arr;
}*/


// 对数组进行去重操作，只考虑数组中元素全为数字或全为字符串，返回一个去重后的数组
function uniqArray(arr) {
    // 使用 hash 数组来解决
    var hash = [];

    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < hash.length; j++) {
            if(arr[i] === hash[j]) { // 重复
                arr.splice(i, 1);
                i--;
                break;
            }
        }

        if(j === hash.length) {  // 第一次出现
            hash[j] = arr[i];
        }
    }

    return arr;
}

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
function trim(str) {
    var reg = /^\s+(.*?)\s+$/g;

    return str.replace(reg, "$1");
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
// 不改变原数组
function each(arr, fn) {
    var len = arr.length;

    for(var i = 0; i < len; i++) {
        fn.apply(null, new Array(arr[i], i));
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    
}
