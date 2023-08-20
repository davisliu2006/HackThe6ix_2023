let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const BOTCLR = "#556677";
const SX = canvas.width;
const SY = canvas.height;

function to_scrpos(x, y) {
    return [x, SY-1-y];
}
function to_cartsn(x, y) {
    return [x, SY-1-y];
}
function rotate(x, y, angle) {
    return [x*Math.cos(angle)-y*Math.sin(angle), y*Math.cos(angle)+x*Math.sin(angle)];
}
function displace(x, y, dx, dy, angle) {
    [dx, dy] = rotate(dx, dy, angle);
    return [x+dx, y+dy];
}
function cis(rot) {
    return [Math.cos(rot), Math.sin(rot)];
}

function draw_line(x0, y0, x1, y1, stroke) {
    [x0, y0] = to_scrpos(x0, y0);
    [x1, y1] = to_scrpos(x1, y1);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 4;
    ctx.stroke();
}
function draw_bot(x, y, rot = 0, size = 20) {
    let [x1, y1] = displace(x, y, size, 0, rot);
    let [x2, y2] = displace(x, y, -size, size*0.5, rot);
    let [x3, y3] = displace(x, y, -size, -size*0.5, rot);
    draw_line(x1, y1, x2, y2, BOTCLR);
    draw_line(x1, y1, x3, y3, BOTCLR);
    draw_line(x2, y2, x3, y3, BOTCLR);
}

// map
let map = Arr2d(SX, SY);
console.log(typeof(map));

// bot
class Obj {
    x = 50;
    y = 50;
    rot = 0;

    get_dist(drot) {
        let [dx, dy] = cis(rot+drot);
        let [x1, y1] = [x, y];
        
    }
};
let bot = new Obj();

draw_bot(bot.x, bot.y, bot.rot);