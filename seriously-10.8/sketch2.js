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

	//INITIALIZE SOURCE AND TARGET
	

	var seriously = new Seriously();
	var src = seriously.source('#p5video');
	var target = seriously.target('#p5canvas');

	function restart() {
		console.log('no checkbox ');
	}

	//CREATE BUTTONS
	
	var pixelateBox = createCheckbox('pixelate',false);
	pixelateBox.id('pixelate');
	pixelateBox.changed(pixelated);

	var nightvisionBox = createCheckbox('nightvision',false);
	nightvisionBox.id('nightvision');
	nightvisionBox.changed(nightvisionState);

	var edgeBox = createCheckbox('edge',false);
	edgeBox.id('edge');
	edgeBox.changed(edged);
	
	function pixelated () {
		if(this.checked()){
			var pixelate = seriously.effect('pixelate');
			pixelate.source = src;
			target.source = pixelate;
		
		}
		else {
			
			restart();

		}
	}

	function nightvisionState (){
		if (this.checked()){
			var nightvision = seriously.effect('nightvision');
			nightvision.source = src;
			target.source = nightvision;
		}
		else {
			console.log('no check');
			pixelate.source = src;
			target.source = pixelate;

		}
	}

	function edged () {
		if (this.checked()){
			var edge = seriously.effect('edge');
			edge.source = src;
			target.source = edge;
		}
		else {
			console.log('no check');
		}
	}

	//RENDER
	seriously.go();
}

