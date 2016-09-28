var video;
var pixelateBox;
var nightvisionBox;
var edgeBox;
var pixelate;
var nightvision;
var edge;

function setup() {
	//CREATE CANVAS IN P5.JS, 
	canvas = createCanvas(640,460, WEBGL); //INITIALIZE WEBGL TO USE SERIOUSLY.JS
	canvas.id('p5canvas');
	background(51);
	video = createCapture(video);
	video.size(320,240);
	video.id('p5video');

	//INITIALIZE SOURCE AND TARGET
	
	var seriously = new Seriously();
	var src = seriously.source('#p5video');
	var target = seriously.target('#p5canvas');

	//MAKE CHECKBOXES
	var pixelateBox = createCheckbox('pixelate',false);
	pixelateBox.id('pixelate');
	pixelateBox.changed(makeEffects);
	
	var nightvisionBox = createCheckbox('nightvision',false);
	nightvisionBox.id('nightvision');
	nightvisionBox.changed(makeEffects);

	var edgeBox = createCheckbox('edge',false);
	edgeBox.id('edge');
	edgeBox.changed(makeEffects);

	//MAKE INDIVIDUAL FUNCTIONS FOR EACH EFFECT

	function pixelate(_src){

		var pixelate = seriously.effect('pixelate');
		pixelate.source = _src;
		target.source = pixelate;
		return pixelate; //return function to use later
	}

	function nightvisioned(_src) {
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

	//FUNCTION TO MIX EFFECTS BASED ON WHICH CHECKBOX(ES) ARE CHECKED 
	//HAVE TO GO IN DECREASING ORDER FOR NUMBER OF CHECKBOXES
	//Edge has to come before Nightvision which has to come before Pixels
	function makeEffects () {
		//ALL THREE BOXES CHECKED
		if (pixelateBox.checked() && edgeBox.checked()&& nightvisionBox.checked()) {
				
				var edgy = edged(src);
				var NE = nightvisioned(edgy);	
				pixelate(NE);

				console.log('all effects');
		 }

		//TWO BOXES CHECKED
		else if (pixelateBox.checked() && edgeBox.checked()) {
			
			var pixEdge= pixelate(src);
			edged(pixEdge);
			console.log('edge and pixels');
		}

		 else if (pixelateBox.checked() && nightvisionBox.checked() ) {
			
			var pixNight = pixelate(src);
			nightvisioned( pixNight );
			console.log('pixels and nightvision');
		}

		else if(nightvisionBox.checked() && edgeBox.checked()) {

			var edgy = edged(src);
			nightvisioned(edgy);
			console.log('nightvision and edge');
		}
		//ONLY ONE BOX CHECKED
		else if (pixelateBox.checked()) {

			pixelate(src);
		}
		 else if (nightvisionBox.checked()){
			nightvisioned(src);
		}

		else if (edgeBox.checked()) {
			edged(src);
		}
		
	}

	//RENDER SERIOUSLY
	seriously.go();
}

