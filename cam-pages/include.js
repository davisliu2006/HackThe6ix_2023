// math
function round(val, nearest) {
    return Math.floor(val/nearest)*nearest;
}
function rad(x) {
    return x*Math.PI/180;
}
function deg(x) {
    return x*180/Math.PI;
}

// formating
function format(str, varArr, spChar = '%') {
    let i = 0;
    let temp = "";
    for (let j in str) {
        let c = str[j];
        if (c == spChar) {temp += varArr[i++];}
        else {temp += c;}
    }
    return temp;
}

// data
function Arr2d(sx, sy) {
    let arr = new Array(sx);
    for (let x in arr) {
        arr[x] = new Array(sy);
    }
    return arr;
}