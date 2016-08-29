
var video;
var vScale = 8;

var particles = [];

var slider;

function setup() {
	createCanvas(640,480);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width/vScale, height/vScale);
	
	for (var i = 0; i <200; i++) {
		particles[i] = new Paricle(320,240);
	}
	slider = createSlider(0,255,127);
	background(101);
}

function draw() {
	//background

	video.loadPixels();
	for (var i = 0; i <particles.length; i++) {
		particles[i].update();
		particles[i].show();
	}
}