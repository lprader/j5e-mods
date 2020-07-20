import Button from "j5e/button";
import LED from "j5e/led";

const button = await new Button({pin: BUTTON_PIN_NUMBER, invert: true});
const led = await new LED(LED_PIN_NUMBER);

button.on("open", function() {
  console.log("off");
  led.stop().off();
});

button.on("close", function() {
  console.log("on");
  led.on();
});

button.on("hold", function() {
  console.log("hold");
  led.blink();
})