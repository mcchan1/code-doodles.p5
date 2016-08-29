var video;
var slider;
var pixelateButton;
var edgeButton;

function setup() {
	canvas = createCanvas(640,460, WEBGL);
	canvas.id('p5canvas');
	background(51);
	video = createCapture(video);
	video.size(320,240);
	video.id('p5video');

	//CREATE SLIDER
	slider = createSlider(0,1,0,0.01);
	slider.id('blur-slider');

	//CREATE BUTTON

	// edgeButton = createButton('edged');
	// edgeButton.mousePressed(edged);


	//INITIALIZE SOURCE AND TARGET
	var seriously = new Seriously();
	var src = seriously.source('#p5video');
	var target = seriously.target('#p5canvas');

	//PIXELATE
	var pixelate = seriously.effect('pixelate');
	pixelate.source = src;
	target.source = pixelate;
	
	
	//EDGE
	var edge = seriously.effect('edge');
	//source inherits from previous effect -use to combine effects
	edge.source = pixelate;
	target.source = edge;

	//BLUR
	var blur = seriously.effect('blur');
	blur.source = edge;
	blur.amount = ("#blur-slider");
	target.source = blur

	//nightvision
	var nightvision = seriously.effect('nightvision');
	nightvision.source = blur;
	target.source = nightvision;

	//RENDER
	seriously.go();
}

// function draw() {
  
// }