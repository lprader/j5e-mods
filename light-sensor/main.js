import Light from "j5e/light";
import LED from "j5e/led";

const light = await new Light(LIGHT_SENSOR_PIN_NUMBER);
const led = await new LED({
  pin: LED_PIN_NUMBER,
  pwm: true
});

light.on("change", function(data) {
  led.brightness(1023 - data);
});