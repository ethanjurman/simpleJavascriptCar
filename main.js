var stage, car, angle = 0, speed = 5;
var l = false, r = false, u = false, d = false;
var tf;
var fps = 60;
var time = new Date().getTime();
var rot;

function Start()
{
    stage = new Stage("c");
    
    // background
    var s = new Sprite();
    stage.addChild(s);
    
    // load image details
    /* you must do this for every image if you want to know thier
	height and width before they are posted on the page */
	var imgCar = new Image();
	imgCar.src = "http://i.imgur.com/xs5f0A6.png";
	document.body.appendChild(imgCar); // loads the img
	document.body.removeChild(imgCar); // keeps the img, but removes it from the document

    // car			
    car = new Sprite(); 
    car.x = stage.stageWidth/2; // place car in the middle of the page
    car.y = stage.stageHeight/2; // place car in the middle of the page
    	// rotation for rotating the car (seen in onEF)
    rot = {
		u : 0,
		d : 180,
		r : 90,
		l : -90,
	}

	// working with the car bitmap
    cb = new Bitmap(new BitmapData("http://i.imgur.com/xs5f0A6.png"));
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
    if(e.keyCode == 37) l = true;
    if(e.keyCode == 38) u = true;
    if(e.keyCode == 39) r = true;
    if(e.keyCode == 40) d = true;
}

function onKU (e)
{
    if(e.keyCode == 37) l = false;
    if(e.keyCode == 38) u = false;
    if(e.keyCode == 39) r = false;
    if(e.keyCode == 40) d = false;
}

function onEF (e)
{
	// rotation stuff
//	carWidth = cb.bitmapData.width;
//	carHeight = cb.bitmapData.height;
	
    if (u){car.rotation = rot.u;}
    else if (d){car.rotation = rot.d;}
    if (r){car.rotation = rot.r - u*rot.r/2 + d*rot.r/2;} 
    else if (l){car.rotation = rot.l - u*rot.l/2 + d*rot.l/2;}
    if (u || d || l || r){
		car.x += speed*Math.cos((car.rotation/180-0.5)*Math.PI);
		car.y += speed*Math.sin((car.rotation/180-0.5)*Math.PI);
	}
}