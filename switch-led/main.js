import Switch from "j5e/switch";
import LED from "j5e/led";

const mySwitch = await new Switch(SWITCH_PIN_NUMBER);
const led = await new LED(LED_PIN_NUMBER);

mySwitch.on("open", function() {
  console.log("off");
  led.off();
});

mySwitch.on("close", function() {
  console.log("on");
  led.on();
});