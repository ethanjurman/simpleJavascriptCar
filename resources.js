 // load image details
/* you must do this for every image if you want to know thier
height and width before they are posted on the page */
var imgCar = new Image();
imgCar.src = "./car.png";
document.body.appendChild(imgCar); // loads the img
document.body.removeChild(imgCar); // keeps the img, but removes it from the document
