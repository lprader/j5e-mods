import LED from "j5e/led";

const led = await new LED({
	pin: 2,
	pwm: true
});
led.pulse();