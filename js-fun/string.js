const log = function(doc) {
    console.log(doc);
};

function trim(str, type) {
    switch (type) {
        case 1: return str.replace(/\s+/g, '')
        case 2: return str.replace(/(^\s*)|(\s*$)/g, '')
        case 3: return str.replace(/(^\s*)/g, '')
        case 4: return str.replace(/(\s*$)/g, '')
    }
}

/*type
 1:首字母大写
 2：首页母小写
 3：大小写转换
 4：全部大写
 5：全部小写
 * */
function changeCase(str,type)
{
    function ToggleCase(str) {
        var itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                }
                else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                }
                else{
                    itemText += item;
                }
            });
        return itemText;
    }

    switch (type) {
        case 1:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
        case 2:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toLowerCase() + v2.toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

//checkPwd('12asdASAD')
//3(强度等级为3)
function checkPwd(str) {
    var nowLv = 0;
    if (str.length < 6) {
        return nowLv
    }
    if (/[0-9]/.test(str)) {
        nowLv++
    }
    if (/[a-z]/.test(str)) {
        nowLv++
    }
    if (/[A-Z]/.test(str)) {
        nowLv++
    }
    if (/[\.|-|_]/.test(str)) {
        nowLv++
    }
    return nowLv;
}


function randomNumber(count) {
    return Math.random().toString(count).substring(2);
}
// 数组去重
function removeRepeatArray(arr) {
    return Array.from(new Set(arr));
}
//最大最小值
function maxArr(arr) {
    return Math.max.apply(null, arr);
}

function minArr() {
    return Math.min.apply(null, arr);
}

const arr = [1,2,34,5,6,34,6,34,5];

log(maxArr(arr));
log(minArr(arr));

log('ass'.substr(2));

String.prototype.substr = function () {
    console.log("my prototype");
};

'aaa'.substr();

