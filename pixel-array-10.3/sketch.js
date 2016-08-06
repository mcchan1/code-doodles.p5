// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
//pixel value (r,g,b, alpha) so 60px canvas 
//array = 60 x 4 = 240 values

//(x + y * width ) * 4


function setup() {
  createCanvas(320, 240);
  pixelDensity(1); //for mac displays
}


function draw() {
  background(51);

  loadPixels();

	for (var y = 0; y < height; y++) {

		for (var x = 0; x < width; x++) {
	  		var index = (x+y *width) *4; 
	  		  pixels[index + 0] = x;
			  pixels[index+1] = random(255); 
			  pixels[index+2] = y;
			  pixels[index+3] = 255;
	  	}	
	}


 	updatePixels();

}
