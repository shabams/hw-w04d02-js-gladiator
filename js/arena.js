class Arena {
  constructor(name) {
    const cName = name[0].toUpperCase() + name.slice(1);
    this.name = cName;
    this.gladiators = [];
  }

  addGladiator(name) {
    this.gladiators.push(name);
  }

  removeGladiator(name) {
    this.gladiators.filter(g => {
      return g.name == name.name;
    });
  }

  fight() {
    const fPW = this.gladiators[0].weapon;
    const sPW = this.gladiators[1].weapon;

    if (fPW == "Trident" && sPW == "Spear") {
      this.gladiators = this.gladiators[0];
    }
    if (fPW == "Spear" && sPW == "Club") {
      this.gladiators = [this.gladiators[0]];
    }
    if (fPW == "Club" && sPW == "Trident") {
      this.gladiators = [this.gladiators[0]];
    }

    if (sPW == "Trident" && fPW == "Spear") {
      this.gladiators = this.gladiators[1];
    }
    if (sPW == "Spear" && fPW == "Club") {
      this.gladiators = [this.gladiators[1]];
    }
    if (sPW == "Club" && fPW == "Trident") {
      this.gladiators = [this.gladiators[1]];
    }
  }
}

export default Arena;
