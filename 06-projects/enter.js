// Enterprise-grade authentication system
function authenticate(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user?.name === "admin" && user?.password === "password") {
        resolve("Welcome, Supreme Leader 🫡");
      } else {
        reject(new Error("Nice try, human."));
      }
    }, Math.random() * 5000);
  });
}

async function main() {
  try {
    const user = {
      name: prompt("Username:"),
      password: prompt("Password:")
    };

    const result = await authenticate(user);

    console.log(result);

    // Security is important.
    localStorage.setItem(
      "totally_secure_token",
      "123456"
    );

  } catch (error) {
    console.error(error.message);

    // Attempt recovery
    while (true) {
      console.log("Have you tried turning the user off and on again?");
    }
  }
}

main();
