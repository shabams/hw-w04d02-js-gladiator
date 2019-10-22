class Gladiator {
  constructor(name, weapon) {
    if (
      weapon == "Spear" ||
      weapon == "Club" ||
      weapon == "Trident" ||
      weapon == "Sword"
    ) {
      this.name = name;
    } else {
      throw new Error("Incorrect input for weapon");
    }
    this.weapon = weapon;
  }
}
export default Gladiator;
