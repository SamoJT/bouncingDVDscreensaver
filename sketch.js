function preload(){
	dvdLogo = loadImage('dvd_logo.png')
}

function setup() {
	createCanvas(720,400);
	xSpeed = 1.5;
	ySpeed = 1.5;
	w = 100;
	h= 50;
	x = random(width-w)
	y = random(height-h);
	tint(colours());
}

function colours(){
	arrColour = [color(255,0,0), color(255,128,0), color(255,255,0),
				 color(128,255,0), color(0,255,0), color(0,255,128),
				 color(0,255,255), color(0,128,255), color(0,0,255)];
	current = random(arrColour);
	previous = current; 
	if (current == previous){
		current = random(arrColour);
	}
	return(current);
}

function draw() {
	background(0);
	image(dvdLogo,x,y,w,h);
	x = x+xSpeed;
	y = y+ySpeed;
	if (x >= width || x <= 0 || x+w>=width){
		tint(colours());
		xSpeed = -xSpeed;
	} else if (y >= height|| y <= 0 || y+h >= height){
		ySpeed = -ySpeed;
		tint(colours());
	}
}