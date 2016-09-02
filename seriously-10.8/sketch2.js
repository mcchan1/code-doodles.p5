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

	function pixelate(_src){

		var pixelate = seriously.effect('pixelate');
		pixelate.source = _src;
		target.source = pixelate;
		return pixelate;
	}

	function nightvisoned(_src) {
		var nightvision = seriously.effect('nightvision');
		nightvision.source = _src;
		target.source = nightvision;
		return nightvision;
	}

	function edged(_src) {
		var edge = seriously.effect('edge');
	 		edge.source = _src;
	 		target.source = edge;
	 		return edge;
	}

	function makeEffects () {
		
		if (pixelateBox.checked() && nightvisionBox.checked() ) {
			// var nightvision = seriously.effect('nightvision');
			
		//	debugger;
		var pix = pixelate(src);
			nightvisoned( pix );
			// pixelate.source = src;
	 	// 	nightvision.source = pixelate;
			// target.source = nightvision;
			console.log('pixels and nightvision');
		}

		else if (pixelateBox.checked()) {

			pixelate(src);
		}
		else if (nightvisionBox.checked()){
			nightvisoned(src);
		}

		else if (edgeBox.checked()) {
			edged(src);
		}

		
	}


	//RENDER
	seriously.go();
}

