
// var with an array of colors
// random picker of colors from array that is returned to the change_color function

color = ["Blue", "Green", "Purple", "Yellow", "White","Pink",];
var color1;
var color2;
var color3;



function change_color(){
  randomGradient();
 // document.body.style.background = "linear-gradient(to right," + color1 + "," + color2 + ")";
 document.body.style.background = "repeating-radial-gradient("+ color1 + ","+ color2+ " 15%," +  color3 +" 20%)";

   console.log("Good Good!");

}

function randomGradient() {
        color1 = randomColor();
        color2 = randomColor();
        color3= randomColor();
    }

    function randomColor() {
        var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        return newColor;
    }
