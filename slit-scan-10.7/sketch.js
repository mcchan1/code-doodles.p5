var video;
var video2;

var x = 0;

function setup() {
	createCanvas(800,240);
	pixelDensity(1);
	video = createCapture(video);
	video2 = createCapture(video2);
	video.size(320,240);
	video2.size(320,240);
	background(51);
}

function draw() {
	
	video.loadPixels();
	video2.loadPixels();
	
	var w = video.width;
	var h = video.height;
	//manipulate the slits below
	copy(video, w/2, 0,3,h,x,0,1,h);

	copy(video2, w/2,0,1,h,x,0,10,100);


	x = x + 1;
  	if(x > width){
  	x = 0;
  }
}