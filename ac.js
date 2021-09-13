status = "";
function preload(){
    img = loadImage("PHOTO-2021-09-11-10-59-50.jpg");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Detecting objects";
}
function modelLoaded(){
    console.log("model loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}