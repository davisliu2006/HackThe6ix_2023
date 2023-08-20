let maindiv = document.getElementById("main");
let canvas_u = document.getElementById("canvas-u");
let canvas_mp = document.getElementById("canvas");

const SX = canvas_mp.width;
const SY = canvas_mp.height;

const BOTCLR = "#556677";
const BOTSPD = 2;
const BOTRSPD = rad(2);
const WALLDIST = 50;

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

function clear(cvs) {
    let ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, SX, SY);
}
function draw_line(cvs, x0, y0, x1, y1, stroke, thick = 4) {
    let ctx = cvs.getContext("2d");
    [x0, y0] = to_scrpos(x0, y0);
    [x1, y1] = to_scrpos(x1, y1);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = thick;
    ctx.stroke();
}
function draw_bot(x, y, rot = 0, size = 20) {
    let [x1, y1] = displace(x, y, size, 0, rot);
    let [x2, y2] = displace(x, y, -size, size*0.5, rot);
    let [x3, y3] = displace(x, y, -size, -size*0.5, rot);
    draw_line(canvas_u, x1, y1, x2, y2, BOTCLR);
    draw_line(canvas_u, x1, y1, x3, y3, BOTCLR);
    draw_line(canvas_u, x2, y2, x3, y3, BOTCLR);
}

// OJBECTS

// map
let map = Arr2d(SX, SY);
let optimize = false;

// bot
class Obj {
    x = 50;
    y = 50;
    rot = 0;

    get_dist(drot = 0) {
        let [dx, dy] = cis(bot.rot+drot);
        let [x1, y1] = [bot.x, bot.y];
        while (0 <= x1 && x1 <= SX-1 && 0 <= y1 && y1 <= SY-1 
        && map[Math.round(x1)][Math.round(y1)] == 0) {
            x1 += dx; y1 += dy;
        }
        return Math.sqrt(sq(x1-bot.x)+sq(y1-bot.y));
    }
};
let bot = new Obj();

// INPUT
let up = false;
let down = false;
let left = false;
let right = false;
let reverse = false;
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 'W'.charCodeAt()) {up = true;}
    else if (event.keyCode == 'A'.charCodeAt()) {left = true;}
    else if (event.keyCode == 'S'.charCodeAt()) {down = true;}
    else if (event.keyCode == 'D'.charCodeAt()) {right = true;}
    else if (event.keyCode == 'X'.charCodeAt()) {reverse = true;}
});
document.addEventListener("keyup", function(event) {
    if (event.keyCode == 'W'.charCodeAt()) {up = false;}
    else if (event.keyCode == 'A'.charCodeAt()) {left = false;}
    else if (event.keyCode == 'S'.charCodeAt()) {down = false;}
    else if (event.keyCode == 'D'.charCodeAt()) {right = false;}
    else if (event.keyCode == 'X'.charCodeAt()) {reverse = false;}
});

let mousedn = false;
let mousex;
let mousey;
document.onmousedown = function(e) {
    mousedn = true;
}
document.onmouseup = function(e) {
    mousedn = false;
    optimize = false;
}
document.onmousemove = function(e) {
    mousex = e.pageX-canvas_mp.offsetLeft-maindiv.offsetLeft;
    mousey = e.pageY-canvas_mp.offsetTop-maindiv.offsetTop;
    [mousex, mousey] = to_cartsn(mousex, mousey);
}

// MAP CONSTRUCT

function mark_walls() {
    for (let x = 0; x < SX; x++) {
        for (let y = 0; y < SY; y++) {
            if (map[x][y] == 1) {
                draw_line(canvas_mp, x, y, x+0.5, y+0.5, "#000000");
            }
        }
    }
}
function set(x, y, val) {
    if (0 <= x && x < SX && 0 <= y && y < SY) {
        map[x][y] = val;
    }
}

// MAIN

// initialize
function init() {
    
}

// periodic
let prefer_turn = 1;
function periodic() {
    // movement
    let [dx, dy] = cis(bot.rot);
    dx *= BOTSPD; dy *= BOTSPD;
    let dist0 = Math.min(bot.get_dist(rad(0)), bot.get_dist(rad(-10)), bot.get_dist(rad(10)));
    let dist45 = bot.get_dist(rad(45));
    let distn45 = bot.get_dist(rad(-45));
    let dist90 = bot.get_dist(rad(90));
    let distn90 = bot.get_dist(rad(-90));
    let dist180 = bot.get_dist(rad(180));
    // fwd
    if (up) {
        if (dist0 > WALLDIST) {
            bot.x += dx; bot.y += dy;
        } else {
            if (dist45-distn45 >= 5) {
                prefer_turn = 1;
            } else if (dist45-distn45 <= -5) {
                prefer_turn = -1;
            }
            bot.rot += BOTRSPD*prefer_turn;
        }
    } else if (down) {
        if (dist180 > WALLDIST) {
            bot.x -= dx; bot.y -= dy;
        }
    }
    //turn
    if (left) {
        bot.rot += BOTRSPD;
    } else if (right) {
        bot.rot -= BOTRSPD;
    }

    // construct
    if (mousedn) {
        let sz = (reverse? 50 : 5);
        for (let dx = -sz; dx <= sz; dx++) {
            for (let dy = -sz; dy <= sz; dy++) {
                set(mousex+dx, mousey+dy, (reverse? 0 : 1));
            }
        }
    }

    // draw
    clear(canvas_u);
    draw_bot(bot.x, bot.y, bot.rot);
    let [x0, y0] = displace(bot.x, bot.y, dist0, 0, bot.rot);
    let [x90, y90] = displace(bot.x, bot.y, dist90, 0, bot.rot+rad(90));
    let [xn90, yn90] = displace(bot.x, bot.y, distn90, 0, bot.rot-rad(90));
    if (dist0 > WALLDIST) {
        draw_line(canvas_u, bot.x, bot.y, x0, y0, "#108810", 2);
    }
    if (dist90 > WALLDIST) {
        draw_line(canvas_u, bot.x, bot.y, x90, y90, "#108810", 2);
    }
    if (distn90 > WALLDIST) {
        draw_line(canvas_u, bot.x, bot.y, xn90, yn90, "#108810", 2);
    }
    if (!optimize) {
        clear(canvas_mp);
        mark_walls();
        optimize = true;
    }
}

init();
setInterval(periodic, 10);