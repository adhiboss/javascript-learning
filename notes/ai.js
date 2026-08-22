// The world's most advanced AI system
// (it is literally just JavaScript)

const human = {
  name: "Adhi",
  brain: 100,
  motivation: 100,
  sleep: 0,
  assignments: Infinity
};

console.log("🧠 Booting human...");
setTimeout(() => console.log("✅ Human detected."), 500);

setTimeout(() => {
  console.log("📚 Checking assignments...");
  console.log(`Assignments remaining: ${human.assignments}`);
}, 1000);

setTimeout(() => {
  console.log("☕ Increasing caffeine...");
  human.brain += 10;
  human.sleep -= 20;
}, 1500);

setTimeout(() => {
  console.log("💻 Opening VS Code...");
  console.log("⚠️  47 tabs detected.");
}, 2000);

setTimeout(() => {
  console.log("🤔 User: 'I'll study for 5 minutes.'");
}, 2500);

setTimeout(() => {
  console.log("🎮 YouTube algorithm has entered the chat.");
  human.motivation -= 50;
}, 3000);

setTimeout(() => {
  console.log("🧠 Brain: We should study.");
  console.log("🧍 Body: Absolutely.");
  console.log("📱 Phone: No.");
}, 3500);

setTimeout(() => {
  console.log("💀 SYSTEM FAILURE");
  console.log("Reason: opened Instagram 'for one minute'");
}, 4500);

setTimeout(() => {
  console.log("\n================================");
  console.log("       HUMAN.exe HAS STOPPED");
  console.log("================================");
  console.log("Restarting tomorrow...");
}, 5500);
