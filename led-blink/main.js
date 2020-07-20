import LED from "j5e/led";

const led = await new LED(LED_PIN_NUMBER);
led.blink();