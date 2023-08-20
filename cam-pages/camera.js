let model;
let stream;
let recorder;

// objects
let load = document.getElementById("cam-load");
let vid = document.getElementById("cam-vid");
let infoList = document.getElementById("info-list");
let camMark = document.getElementById("cam-markings");

// FUNCTIONS

async function init_video() {
    stream = await navigator.mediaDevices.getUserMedia({
        video: true
    });
    recorder = new MediaRecorder(stream, {
        mimeType: 'video/webm',
    });
    vid.srcObject = stream;
}

// MAIN

// initialize
function init() {
    init_video();
    load.innerHTML = "";
}

// periodic
function periodic() {
    model.detect(vid).then(function(predictions) {
        let info_temp = "";
        let marking_temp = "";
        for (let i in predictions) {
            let pred = predictions[i];
            console.log(pred);
            let x = pred.bbox[0];
            let y = pred.bbox[1];
            let w = pred.bbox[2];
            let h = pred.bbox[3];
            info_temp += "\""+pred.class+"\"<br>";
            info_temp += format("&emsp;x: %, y: % <br>&emsp;w: %, h: % <br>",
                [x.toFixed(3), y.toFixed(3), w.toFixed(3), h.toFixed(3)]);
            marking_temp += format("<div class='cam-marking' "
                +"style='left: %px; top: %px; width: %px; height: %px;' "
                +"></div>",
                [x, y, w*0.5, h*0.5]);
        }
        infoList.innerHTML = info_temp;
        camMark.innerHTML = marking_temp;
    });
}

cocoSsd.load().then(function(mod) {
    model = mod;
    init();
    setInterval(periodic, 100);
});