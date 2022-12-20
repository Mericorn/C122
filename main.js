function preload(){

}
function setup(){
    canvas = createCanvas(650, 650);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video, 150, 150, 400, 400);
    rect(90,90,510,20);
    fill(150);
    rect(90,600,510,20);
    fill(150);
    rect(90,90,510,20);
    fill(150);
    rect(90,90,510,20);
    fill(150);
    rect(90,90, 20, 510);
    fill(150);
    rect(600,90, 20, 510);
    fill(0)
    circle(90, 90, 90);
    fill(0)
    circle(600, 90, 90);
    fill(0)
    circle(90, 600, 90);
    fill(0)
    circle(600, 600, 90);
}
function take_snapshot(){
    save('framed.png');
}