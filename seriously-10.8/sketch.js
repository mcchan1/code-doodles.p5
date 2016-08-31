var video;
var slider;
var pixelateButton;
var edgeButton;
var edge; 

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

	//CREATE BUTTONS
	var edgeLetter = "edge off";
	var edgeButton = createButton(edgeLetter);
	edgeButton.id('edged');
	edgeButton.mouseClicked(edged);

	var pixelateButton = createButton('pixelate');
	pixelateButton.id('pixelate');
	//pixelateButton.mouseClicked(pixelated);
 
	var nightvisionButton = createButton('nightvision');
	nightvisionButton.id('nightvision');
	nightvisionButton.mouseClicked(nightvisionState);


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


	function edged () {
		
		if(blur.source == edge) {
			blur.source = pixelate;	
		}
		else {
			blur.source = edge;
		}	
	}

	//BLUR
	var blur = seriously.effect('blur');
	blur.source = edge;
	blur.amount = ("#blur-slider");
	target.source = blur

	//nightvision
	var nightvision = seriously.effect('nightvision');
	nightvision.source = blur;
	target.source = nightvision;

	function nightvisionState () {
		if (nightvision.source == blur) {
			nightvision.source = src;

		}
		else
		{
			nightvision.source = blur; 
		}
	}

	//RENDER
	seriously.go();
}

// function draw() {
  
// }