var video;
var pixelateBox;
var nightvisionBox;
var edgeBox;
var pixelate;
var nightvision;

function setup() {
	canvas = createCanvas(640,460, WEBGL);
	canvas.id('p5canvas');
	background(51);
	video = createCapture(video);
	video.size(320,240);
	video.id('p5video');

	//INITIALIZE SOURCE AND TARGET
	

	var seriously = new Seriously();
	var src = seriously.source('#p5video');
	var target = seriously.target('#p5canvas');

	var pixelateBox = createCheckbox('pixelate',false);
	pixelateBox.id('pixelate');
	pixelateBox.changed(makeEffects);
	

	var nightvisionBox = createCheckbox('nightvision',false);
	nightvisionBox.id('nightvision');
	nightvisionBox.changed(makeEffects);

	var edgeBox = createCheckbox('edge',false);
	edgeBox.id('edge');
	edgeBox.changed(makeEffects);

	function pixelate(){
		var pixelate = seriously.effect('pixelate');
		pixelate.source = src;
		target.source = pixelate;
	}
	function nightvisoned() {
		var nightvision = seriously.effect('nightvision');
		nightvision.source = src;
		target.source = nightvision;
	}

	function edged() {
		var edge = seriously.effect('edge');
	 		edge.source = src;
	 		target.source = edge;
	}

	function makeEffects () {
		if (pixelateBox.checked()) {

			pixelate();
		}
		else if (nightvisionBox.checked()){
			nightvisoned();
		}

		else if (edgeBox.checked()) {
			edged();
		}

		else if (pixelateBox.checked() && nightvisionBox.checked() ) {
			// var nightvision = seriously.effect('nightvision');
			// pixelate.source = src;
	 	// 	nightvision.source = pixelate;
			// target.source = nightvision;
			console.log('pixels and nightvision');
		}
	}


	//RENDER
	seriously.go();
}

