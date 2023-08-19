let load = document.getElementById("cam-load");
let vid = document.getElementById("cam-vid");
let stream;
let recorder;

let model;

async function init_video() {
    stream = await navigator.mediaDevices.getUserMedia({
        video: true
    });
    recorder = new MediaRecorder(stream, {
        mimeType: 'video/webm',
    });
    vid.srcObject = stream;
}

// FUNCTIONS



// MAIN

function init() {
    init_video();
    load.innerHTML = "";
}

function periodic() {
    model.detect(vid).then(function(predictions) {
        console.log("Predictions: ", predictions);
    });
}

cocoSsd.load().then(function(mod) {
    model = mod;
    init();
    setInterval(periodic, 10);
});