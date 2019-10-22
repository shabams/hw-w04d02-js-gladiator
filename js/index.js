import Gladiator from "./gladiator.js";
import Arena from "./arena.js";

const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Club");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]
