img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("d0g", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("red");
    text("Cat", 320, 120);
    noFill();
    stroke("red");
    rect(300, 90, 270, 320);

    fill("red");
    text("the awesome bowl", 270, 335);
    noFill();
    stroke("red");
    rect(260, 320, 170, 90 );
}

function modelLoaded() {
    console.log("Model Loaded ~");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}