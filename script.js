import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js'


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



neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})
