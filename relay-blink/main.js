import Relay from "j5e/relay";
import { timer } from "j5e/fn";

const relay = await new Relay(RELAY_PIN_NUMBER);

timer.setInterval(function() {
  relay.toggle();
}, 1000);