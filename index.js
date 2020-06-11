//HomePage interactive Window
var viewportWidth = $("body").innerWidth();
var viewportHeight = $("body").innerHeight();

var randomNumber = Math.floor(Math.random()*4)+1;
console.log(randomNumber);

//interactive frame options
//Random-colour circle trail
if (randomNumber === 1) {
  $("#artText").html("Come zen yourself! 🧘");

  var time = 0;
  var increment = 0.02;
  var time1 = 1;
  var increment1 = 0.02;
  var time2 = 2;
  var increment2 = 0.02;
function setup(){
  var canvas = createCanvas(viewportWidth*0.8, viewportHeight*0.82);
  canvas.parent('sketch-div');
  background(255);
}

function draw(){
  var perlinsNoise = noise(time);
  var r = perlinsNoise*255;
  time += increment;
  var perlinsNoise1 = noise(time1);
  var g = perlinsNoise1*255;
  time1 += increment1;
  var perlinsNoise2 = noise(time2);
  var b = perlinsNoise2*255;
  time2 += increment2;

  fill(r,g,b);
  noStroke(0);
  ellipse(mouseX, mouseY, viewportHeight*0.2*perlinsNoise, viewportHeight*0.2*perlinsNoise);
}
}
else if (randomNumber === 2) {
  //snake trail
  $("#artText").html("Live that Nokia 3D Snake fantasy 📱");
  var xpos = new Array(100);
  var ypos = new Array(100);

  function setup(){
    var canvas = createCanvas(viewportWidth*0.8, viewportHeight*0.82);
    canvas.parent('sketch-div');

    for (var i=0; i<xpos.length; i++) {
  		xpos[i] = 0;
  		ypos[i] = 0;
  	}
  }
  function draw(){
      background(255);

    	for (var i=0; i<xpos.length-1; i++) {
    		xpos[i] = xpos[i+1];
    		ypos[i] = ypos[i+1];
    	}
    	xpos[xpos.length-1] = mouseX;
    	ypos[ypos.length-1] = mouseY;

    	for (var i=0; i<xpos.length; i++) {
    		fill(i*5, i*2, 0);
    		stroke(0);
        strokeWeight(2)
    		ellipseMode(CENTER);
    		ellipse(xpos[i], ypos[i], i*2, i*2);
    	}
  }
}
else if (randomNumber === 3) {
  //swirls
  $("#artText").html("I'm a creep, I'm a weirdo 👨🏽‍🎤");
  var theta = 0;

  function setup(){
    var canvas = createCanvas(viewportWidth*0.8, viewportHeight*0.82);
    canvas.parent('sketch-div');
    frameRate(25);
  }

  function draw(){
    background(255,60,0, 150);
    // Increment theta (try different values for "angular velocity" here)

    	 theta += 0.02;
       fill(255);
       strokeWeight(5);
       stroke(50);
       var x = theta;
       // A simple way to draw the wave with an ellipse at each location
       for (var i = 0; i <= 100; i++) {
       		var y = sin(x)*height/3;
  			ellipse(i*(mouseX/8),y+(mouseY/2),viewportWidth*0.5,viewportWidth*0.5);
  			x += 0.1;
  		}
  }
}
else if (randomNumber === 4) {
  //heartbeat
  $("#artText").html("Dhak dhak karne laga 💁🏽‍♀️");
  var time = 0.0;
  var increment = 0.02;

  function setup(){
    var canvas = createCanvas(viewportWidth*0.8, viewportHeight*0.82);
    canvas.parent('sketch-div');
    noStroke();
  }

  function draw(){
    background(255);
  	var perlinsNoise = noise(time);
  	var n = perlinsNoise*height;
  	time += increment;

  	fill(mouseX/3, 160, mouseY/3);
  	ellipse(width/2, height/2, n, n);

  }
}
