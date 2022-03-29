video = "";

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(450, 350);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 450, 350);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    video.speed(1);
    video.volume(0);
    video.loop();
}