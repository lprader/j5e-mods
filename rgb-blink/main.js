import RGB from "j5e/rgb";

const rgb = await new RGB([R_PIN_NUMBER, G_PIN_NUMBER, B_PIN_NUMBER]);
rgb.color("#663399");
rgb.blink();