canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 120;
rover_height = 70;

rover_x = 10;
rover_y = 10;

car2_width = 120;
car2_height = 70;

car2_x = 10;
car2_y = 100;

background_image = "background.jpg";
rover_image = "car1.png";
car2_image = "car2real.jfif"

 function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;

car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '87')
        {
            w();
            console.log("key w");
        }
        if(keyPressed == '83')
        {
            s();
            console.log("key s");
        }
        if(keyPressed == '65')
        {
            a();
            console.log("key a");
        }
        if(keyPressed == '68')
        {
            d();
            console.log("key d");
        }
}

function up()
{
if(rover_y >=0)
{
    rover_y = rover_y - 10;
    console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
    uploadBackground();
    uploadrover();
    uploadcar2();
}
}


function down()
{
if(rover_y <=500)
{
    rover_y = rover_y + 10;
    console.log("When down arrow is pressed = " + rover_x + " - " + rover_y);
    uploadBackground();
    uploadrover();
    uploadcar2();
}
}

function left()
{
if(rover_x >=0)
{
    rover_x = rover_x - 10;
    console.log("When left arrow is pressed = " + rover_x + " - " + rover_y);
    uploadBackground();
    uploadrover();
    uploadcar2();
}
}

function right()
{
if(rover_x <=700)
{
    rover_x = rover_x + 10;
    console.log("When right arrow is pressed = " + rover_x + " - " + rover_y);
    uploadBackground();
    uploadrover();
    uploadcar2();
}
}

function w()
{
if(car2_y >=0)
{
    car2_y = car2_y - 10;
    console.log("When the W key is pressed = " + car2_x + " - " + car2_y);
    uploadBackground();
    uploadcar2();
    uploadrover();
}
}


function s()
{
if(car2_y <=500)
{
    car2_y = car2_y + 10;
    console.log("When the S key is pressed = " + car2_x + " - " + car2_y);
    uploadBackground();
    uploadcar2();
    uploadrover();
}
}

function a()
{
if(car2_x >=0)
{
    car2_x = car2_x - 10;
    console.log("When the A key is pressed = " + car2_x + " - " + car2_y);
    uploadBackground();
    uploadcar2();
    uploadrover();
}
}

function d()
{
if(car2_x <=700)
{
    car2_x = car2_x + 10;
    console.log("When the D key is pressed = " + car2_x + " - " + car2_y);
    uploadBackground();
    uploadcar2();
    uploadrover();
}
}

if (rover_x > 700)
{
    console.log("Car 1");
    document.getElementById("game_status").innerHTML = "Car 1 wins";
}
else if(car2_x > 700)
{
    console.log("Car 2");
    document.getElementById("game_status").innerHTML = "Car 2 wins";
}
