
let puppy;

function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);

	puppy = loadImage('puppy.jpg');
}


function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();
  fill(255,50,50);
	image(puppy, mouseX, mouseY, 100);
}
