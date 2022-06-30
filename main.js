function preload() { }
 function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    background("pink")
}
function draw() {
    image(video, 50, 50, 500, 500); tint(tint_color);
    fill ("red")
    circle(25,25,20)
    circle(575,25,20)
    circle(25,575,20)
    circle(575,575,20)
fill("blue")
rect(50,10,500,20)
rect(50,575,500,20)
rect(10,50,20,500)
rect(575,50,20,500)


}

function tint() {
    tint_color = document.getElementById("colour").value;
}
function take_snapshot() {
    save("picture.png")
}
