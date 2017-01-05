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
    return Object.prototype.toString.call(arr) === "[object Object]";
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不包含函数、正则对象等
function cloneObject(src) {
    // 作为返回对象
    if(typeof src === null || typeof src !== "object") {
        return src;
    }

    var result = isObject(src) ? {} : [];

    for(var item in src) {
        if( isObject(src[item]) ) { // 若为对象
            result[item] = cloneObject(src[item]);
        }
        else if( isArray(src[item]) ) { // 若为数组
            result[item] = cloneObject(src[item]);
        }
        else {
            result[item] = src[item];
        }
    }

    return result;
}
