// Password Generator
// ==================


// Character sets

const lowercase =
    "abcdefghijklmnopqrstuvwxyz";

const uppercase =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers =
    "0123456789";

const symbols =
    "!@#$%^&*()_+-=[]{}|;:,.<>?";


// Get elements

const passwordInput =
    document.getElementById("password");

const lengthInput =
    document.getElementById("length");

const lengthValue =
    document.getElementById("lengthValue");

const uppercaseInput =
    document.getElementById("uppercase");

const numbersInput =
    document.getElementById("numbers");

const symbolsInput =
    document.getElementById("symbols");

const generateButton =
    document.getElementById("generateButton");

const copyButton =
    document.getElementById("copyButton");

const message =
    document.getElementById("message");


// Update length display

lengthInput.addEventListener("input", function () {

    lengthValue.textContent =
        lengthInput.value;

});


// Generate password

generateButton.addEventListener(
    "click",
    generatePassword
);


function generatePassword() {

    const length =
        Number(lengthInput.value);


    let characters =
        lowercase;


    if (uppercaseInput.checked) {

        characters += uppercase;

    }


    if (numbersInput.checked) {

        characters += numbers;

    }


    if (symbolsInput.checked) {

        characters += symbols;

    }


    let password = "";


    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(
                Math.random() * characters.length
            );

        password +=
            characters[randomIndex];

    }


    passwordInput.value =
        password;

    message.textContent =
        "Password generated!";
}


// Copy password

copyButton.addEventListener(
    "click",
    async function () {

        if (passwordInput.value === "") {

            message.textContent =
                "Generate a password first.";

            return;
        }


        await navigator.clipboard.writeText(
            passwordInput.value
        );


        message.textContent =
            "Password copied!";
    }
);
