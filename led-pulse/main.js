import LED from "j5e/led";

const led = await new LED({
	pin: LED_PIN_NUMBER,
	pwm: true
});
led.pulse();