// math
function round(val, nearest) {
    return Math.floor(val/nearest+0.5)*nearest;
}
function rad(x) {
    return x*Math.PI/180;
}
function deg(x) {
    return x*180/Math.PI;
}
function sq(x) {
    return x*x;
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
    let arr = [];
    for (let x = 0; x < sx; x++) {
        let line = [];
        for (let y = 0; y < sy; y++) {
            line.push(0);
        }
        arr.push(line);
    }
    return arr;
}