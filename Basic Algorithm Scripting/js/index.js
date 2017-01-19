/**
 * Reverse a String
 * 翻转字符串
 */
function reverseString(str) {
    var arr = str.split("");
    var reArr = arr.reverse();
    var newStr = reArr.join("");
    return newStr;
}

reverseString("hello");

/**
 * Factorialize a Number
 * 计算一个整数的阶乘
 */
function factorialize(num) {
    if (num > 0) {
        var i = 1;
        var newNum = 1;
        for (; i <= num; i++) {
            newNum = newNum * i;
        }
        return newNum;
    } else if (num == 0) {
        return 1;
    }
}

factorialize(5);

/**
 * Check for Palindromes
 * 判断回文
 */
function palindrome(str) {
    var pig = /[\W_]/ig;
    var newStr, preStr;
    preStr = str.replace(pig, "");
    newStr = str.replace(pig, "");
    newStr = newStr.split("");
    newStr = newStr.reverse();
    newStr = newStr.join("");
    if (preStr.toLowerCase() === newStr.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");

/**
 * Find the Longest Word in a String
 * 找到提供的句子中最长的单词，并计算它的长度。
 */
function findLongestWord(str) {
    var strArr = str.split(" ");
    var lenArr = [];

    for (var i = 0; i < strArr.length; i++) {
        lenArr.push(strArr[i].length);
    }

    var bToS = lenArr.sort(function(a, b) {
        return b - a;
    });

    return bToS[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");


/**
 * Title Case a Sentence
 * 首字母都大写
 */
function titleCase(str) {
    var newArr = str.split(" ");
    var upperArr = [];
    for (var i = 0; i < newArr.length; i++) {
        var lower = newArr[i].toLowerCase();
        var upper = lower[0].toUpperCase();
        var eachWord = lower.split("");
        eachWord.shift();
        eachWord.unshift(upper);
        eachNewWord = eachWord.join("");
        upperArr.push(eachNewWord);
    }
    upperStr = upperArr.join(" ");
    return upperStr;
}

titleCase("I'm a little tea pot");


/**
 * Return Largest Numbers in Arrays
 * 找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
 */
function largestOfFour(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var eachArr = arr[i].sort(function(a, b) {
            return b - a;
        });
        var eachLag = eachArr.shift();
        newArr.push(eachLag);
    }

    return newArr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);


/**
 * Confirm the Ending
 * 检查一个字符串(str)是否以指定的字符串(target)结尾
 */
function confirmEnding(str, target) {
    var targetLen = target.length;
    var newStr = str.substr(-targetLen, targetLen);
    if (newStr == target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n");


/**
 * Repeat a string repeat a string
 * 重复一个指定的字符串 num次
 */
function repeat(str, num) {
    // repeat after me
    var newStr = "";
    if (num < 0) {
        return newStr;
    } else {
        for (var i = 0; i < num; i++) {
            newStr += str;
        }
    }
    return newStr;
}

repeat("abc", 3);


/**
 * Truncate a string
 * 截断一个字符串
 */
function truncate(str, num) {
    // Clear out that junk in your trunk
    var myNum = num <= 3 ? num : num - 3;
    if (num >= str.length) {
        return str;
    } else {
        var newStr = str.slice(0, myNum);
        newStr += "...";
        return newStr;
    }

}

truncate("A-tisket a-tasket A green and yellow basket", 11);


/**
 * Chunky Monkey
 * 把一个数组arr按照指定的数组大小size分割成若干个数组块
 */
function chunk(arr, size) {
    var begin = 0;
    var end = size;
    var len = arr.length;
    var newArr = [];
    var eachArr = [];
    do {
        eachArr = arr.slice(begin, end);
        newArr.push(eachArr);
        begin += size;
        end += size;
        len -= size;
        eachArr = [];
    }
    while (len >= size);

    if (begin < arr.length) {
        eachArr = arr.slice(begin);
        newArr.push(eachArr);
    }
    return newArr;
}

chunk(["a", "b", "c", "d"], 2);


/**
 * Slasher Flick
 * 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始
 */
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    arr.splice(0, howMany);
    return arr;
}

slasher([1, 2, 3], 2);


/**
 * Mutations
 * 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true
 */
function mutation(arr) {
    var prevStr = arr[0].toLowerCase();
    var nextStr = arr[1].toLowerCase();
    var nextStrArr = [];
    var flag = 1;
    nextStrArr = nextStr.split("");
    for (var i = 0; i < nextStrArr.length; i++) {
        if (prevStr.indexOf(nextStrArr[i]) == -1) {
            flag = 0;
        }
    }
    if (flag == 0) {
        return false;
    } else {
        return true;
    }
}


mutation(["hello", "hey"]);


/**
 * Falsy Bouncer
 * 删除数组中的所有假值
 */
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var newArr = [];
    newArr = arr.filter(function(element, index, array) {
        if (array[index]) {
            return array[index];
        }
    });
    return newArr;
}

bouncer([7, "ate", "", false, 9]);


/**
 * Seek and Destroy
 * 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值
 */
function destroyer(arr) {
    // Remove all the values
    var newArr = arr;
    var args = [];
    var flag = 0;
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    do {

        newArr = newArr.filter(function(element) {
            return element != args[flag];
        });
        console.log(args[flag]);
        flag++;
    }
    while (flag < args.length);

    return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/**
 * Where do I belong
 * 先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引
 */
function where(arr, num) {
    // Find my place in this sorted array.
    var newArr = [];
    var indexNum;
    newArr = arr;
    newArr.push(num);
    newArr.sort(function(a, b) {
        return a - b;
    });
    indexNum = newArr.indexOf(num);
    return indexNum;
}

where([40, 60], 50);


/**
 * Caesars Cipher
 * 凯撒密码Caesar cipher，又叫移位密码
 * ROT13
 */
function rot13(str) { // LBH QVQ VG!

    var prevStr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    var nextStr = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var arr = str.split(" ");
    var newArr = [];
    var newString;
    for (var i = 0; i < arr.length; i++) {

        var eachString = arr[i];
        var eachArr = eachString.split("");
        var eachNewArr = [];
        var eachNewString;
        for (var j = 0; j < eachArr.length; j++) {
            for (var x = 0; x < prevStr.length; x++) {
                if (eachArr[j] == prevStr[x]) {
                    eachArr[j] = nextStr[x];
                } else if (eachArr[j] == nextStr[x]) {
                    eachArr[j] = prevStr[x];
                }
            }
            eachNewArr.push(eachArr[j]);
            eachNewString = eachNewArr.join("");
        }
        newArr.push(eachNewString);
        newString = newArr.join(" ");
    }
    return newString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");