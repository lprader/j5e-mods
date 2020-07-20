import Servo from "j5e/servo";

const servo = await new Servo(SERVO_PIN_NUMBER);
servo.sweep();