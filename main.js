function setup(){
    canvas=createCanvas(300 , 300);
    canvas.position(500 , 150);
    video=createCapture(VIDEO);
    video.size(300 ,300);
    video.position(100 , 150);
    posenet=ml5.poseNet(video , modelLoaded)
    posenet.on("pose" , gotposes)
}
function modelLoaded(){
    console.log("The model is loaded");
}
function draw(){
    background("lightgrey");
    document.getElementById("textdimensions").innerHTML="Font = " + difference
    text("YEET" , noseX , noseY)
    textSize(difference);
    fill("black")
}



noseX=0;
noseY=0;
difference=0;
leftWrist=0;
rightWrist=0;

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWrist=results[0].pose.leftWrist.x
        rightWrist=results[0].pose.rightWrist.x
        difference=floor(leftWrist-rightWrist)
        console.log("noseX = " + noseX + "noseY = " + noseY + "difference = " + difference);
    }
}