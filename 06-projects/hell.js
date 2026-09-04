// DO NOT RUN THIS.
// Especially not in production.
// Especially not near a senior developer.

const everything = {};

everything["everything"] = everything;

function fixBug(bug) {
  console.log("Fixing bug:", bug);

  try {
    throw new Error("New bug unlocked");
  } catch (newBug) {
    console.log("It's fine.");
    return fixBug(newBug);
  }
}

const employee = {
  salary: 0,
  motivation: 100
};

Object.defineProperty(employee, "motivation", {
  get() {
    console.log("Motivation requested...");
    return Math.random() > 0.999
      ? 100
      : 0;
  }
});

setInterval(() => {
  if (employee.motivation === 0) {
    console.log("Employee is staring at the wall.");
  }
}, 1);

Promise.resolve()
  .then(() => {
    throw "Monday";
  })
  .catch(() => {
    throw "Tuesday";
  })
  .catch(() => {
    throw "Wednesday";
  })
  .catch(() => {
    throw "Thursday";
  })
  .catch(() => {
    throw "Friday";
  })
  .catch(() => {
    console.log("Weekend DLC unlocked 🎉");
  });

const database = {
  users: ["Bob", "Bob", "Bob", "Definitely Bob"]
};

function authenticate(user) {
  return database.users.includes(user)
    ? true
    : false;
}

console.log(
  authenticate(
    prompt("Enter username:")
  )
);

const server = {
  status: "down"
};

while (server.status !== "up") {
  console.log("Checking server...");
  server.status = Math.random() > 0.01
    ? "down"
    : "up";
}

console.log("SERVER IS UP 🚀");

setTimeout(() => {
  server.status = "down";
  console.log("Never mind.");
}, 1000);
