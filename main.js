var stage, car, angle = 0, speed = 5, rot;
var left = false, right = false, up = false, down = false;

function Start()
{
    stage = new Stage("c");
    
    // load image details
    /* you must do this for every image if you want to know thier
    height and width before they are posted on the page */
    var imgCar = new Image();
    imgCar.src = "./car.png";
    document.body.appendChild(imgCar); // loads the img
    document.body.removeChild(imgCar); // keeps the img, but removes it from the document

    // car            
    car = new Sprite(); 
    car.x = stage.stageWidth/2; // place car in the middle of the page
    car.y = stage.stageHeight/2; // place car in the middle of the page
        // rotation for rotating the car (seen in onEF)
    rot = {
        up : 0,
        down : 180,
        right : 90,
        left : -90,
    }

    // working with the car bitmap
    cb = new Bitmap(new BitmapData("./car.png"));
    car.addChild(cb);
    stage.addChild(car);

    //center the car (for rotational purposes)
    cb.x = -imgCar.width/2;
    cb.y = -imgCar.height/2;

    // events
    stage.addEventListener(KeyboardEvent.KEY_DOWN, onKD);
    stage.addEventListener(KeyboardEvent.KEY_UP, onKU);
    stage.addEventListener(Event.ENTER_FRAME, onEF);
}

function onKD (e)
{
    if(e.keyCode == 37) left = true;
    if(e.keyCode == 38) up = true;
    if(e.keyCode == 39) right = true;
    if(e.keyCode == 40) down = true;
}

function onKU (e)
{
    if(e.keyCode == 37) left = false;
    if(e.keyCode == 38) up = false;
    if(e.keyCode == 39) right = false;
    if(e.keyCode == 40) down = false;
}

function onEF (e)
{    
    if (up){car.rotation = rot.up;}
    else if (down){car.rotation = rot.down;}
    if (right){car.rotation = rot.right - up*rot.right/2 + down*rot.right/2;} 
    else if (left){car.rotation = rot.left - up*rot.left/2 + down*rot.left/2;}
    if (up || down || left || right){
        car.x += speed*Math.cos((car.rotation/180-0.5)*Math.PI);
        car.y += speed*Math.sin((car.rotation/180-0.5)*Math.PI);
    }
}