// Simple OpenAI Chatbot
// Run with: node chatbot.js

import OpenAI from "openai";
import readline from "readline";

// Create OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Create command-line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Store conversation
let conversation = [];

// Ask the user a question
function askQuestion() {
    rl.question("\nYou: ", async (question) => {

        // Exit command
        if (question.toLowerCase() === "exit") {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        // Save user's message
        conversation.push({
            role: "user",
            content: question
        });

        try {
            console.log("\nAI: Thinking...");

            // Send request to OpenAI
            const response = await openai.responses.create({
                model: "gpt-5",
                input: conversation
            });

            // Get AI response
            const answer = response.output_text;

            // Display response
            console.log("\nAI:", answer);

            // Save AI response
            conversation.push({
                role: "assistant",
                content: answer
            });

        } catch (error) {
            console.log("\nError:", error.message);
        }

        // Ask another question
        askQuestion();
    });
}

// Welcome message
console.log("==============================");
console.log("      SIMPLE AI CHATBOT");
console.log("==============================");
console.log("Type 'exit' to stop the chatbot.");

askQuestion();
