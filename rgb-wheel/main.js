import RGB from "j5e/rgb";

const rgb = await new RGB([R_PIN_NUMBER, G_PIN_NUMBER, B_PIN_NUMBER]);
	
var options = {
	duration: 4000,
	cuePoints: [0,  0.25, 0.5, 0.75, 1],
	keyFrames: [[0, 0, 0], [1023, 0, 0], [0, 1023, 0], [0, 0, 1023], [0, 0, 0]],
	loop: true
};

rgb.animate(options);