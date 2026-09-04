class Human {
  constructor() {
    this.energy = 100;
    this.money = 0;
    this.motivation = undefined;
  }

  work() {
    this.energy -= 20;
    this.money += 5;

    if (this.energy <= 0) {
      throw new Error("Human.exe has stopped responding");
    }
  }

  sleep() {
    this.energy = 100;
    console.log("Rebooting human...");
  }
}

const me = new Human();

while (true) {
  try {
    me.work();
    console.log("Working... 💀");
  } catch (e) {
    me.sleep();
  }
}
