
//pixel value (r,g,b, alpha) so 60px canvas 
//array = 60 x 4 = 240 values

//(x + y * width ) * 4

 
var video;

var vScale = 8;

var slider; 
var slider2;
var slider3;

function setup() {
  createCanvas(640, 650);
  pixelDensity(1);
  video = createCapture(VIDEO);
 
  video.size(width/vScale, height/vScale);
  video.id('video-original');

  slider = createSlider(0, 255, 127);
  slider.position(50,675);
  slider.id('color-slider');
  slider.class('input-slider');
  slider2 = createSlider(0,16,8);
  slider2.position(200,675);
  slider2.id('pixel-size-slider');
  slider2.class('input-slider');
  slider3 = createSlider(4,18,7);
  slider3.position(360,675);
  slider3.id('video-size-slider');
  slider3.class('input-slider');
}

function draw() {
  background(51);

  video.loadPixels();
  loadPixels();
  //Color
   var threshold = slider.value(); //pixel value over threshold, do something
   //Pixel Size
   var pixelScale = slider2.value();
   //Video Size
   var size = slider3.value();
    
    //console.log('size',size);
    //console.log(threshold);

  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

     // console.log('r',r,'g', g,'b', b);

      var bright = (r+g+b)/3;
     // console.log(bright);


      if (bright > threshold) {
        fill(r,g,b);
      } else {
                fill(255-r,255-g,255-b);

//        fill(0);
      }

      //var w = vScale // map(bright, 0, 255, 0, vScale);
      var w =  map(bright, 0, 255, 0, pixelScale);

      noStroke();
     // fill(255);
      rectMode(CENTER);
      rect(x*size, y*size * 0.8, w, w);

    }
  } 
 
    fill('red');
    textSize(18);
    text('Slider Color', 50, 525);
    text('Slider Brightness', 185, 525);
    text('Slider Video Scale',350,525);    
} //end Draw()
