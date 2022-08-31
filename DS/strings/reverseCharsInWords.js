// Sample Input = "getting good at coding needs a lot of practice"
// Sample Output = "gnitteg doog ta gnidoc sdeen a tol fo ecitcarp
// need to reverse the every word in the given string;

let str = "getting good at coding needs a lot of practice "

function SplitStr(str) {
    let subStr = "";
    let splitArr = [];
    for(let i=0; i < str.length; i ++) {
    if(str[i] !== ' '){
        subStr = subStr.concat(str[i])
    } else {
        splitArr.push(subStr);
        subStr = ''
    }
    }
    return splitArr
}

const splitArr = SplitStr(str);

function ReverseString(splitArr) {
    let reversedStrArr = []
    for(let i = 0; i < splitArr.length; i ++) {
        let revStr = "";
        //console.log(splitArr[i].length)
        for(let j = splitArr[i].length -1; j >= 0; j --) {
            revStr = revStr.concat(splitArr[i][j])
        }
        reversedStrArr.push(revStr)
    }
    return reversedStrArr;
}

console.log(ReverseString(splitArr))
const reversedStrArr = ReverseString(splitArr)

function Join(reversedStrArr) {
    let finalReversedStr = '';
    reversedStrArr.forEach(strEl => {
        finalReversedStr = finalReversedStr + strEl + ' '
    })
    console.log(finalReversedStr)
    return finalReversedStr
}

Join(reversedStrArr)