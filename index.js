import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Ryan Guilherme";
const lastName = "Lopes";

init("#app", User({ firstName, lastName }));
