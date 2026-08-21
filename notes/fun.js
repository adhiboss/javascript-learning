<!DOCTYPE html>
<html>
<head>
    <title>Programmer Excuse Generator</title>
</head>
<body>

    <h1>👨‍💻 Programmer Excuse Generator</h1>

    <p id="excuse">Click the button...</p>

    <button onclick="generateExcuse()">
        Generate Excuse 🎲
    </button>

    <script>
        const excuses = [
            "It works on my machine.",
            "That's not a bug, it's a feature.",
            "I forgot to save the file.",
            "JavaScript did it.",
            "The code was working yesterday.",
            "Have you tried turning it off and on again?",
            "I need more RAM.",
            "The compiler is having a bad day.",
            "I have no idea why it works, but don't touch it.",
            "It's probably a Windows problem."
        ];

        function generateExcuse() {
            const randomIndex = Math.floor(Math.random() * excuses.length);

            document.getElementById("excuse").textContent =
                excuses[randomIndex];
        }
    </script>

</body>
</html>
