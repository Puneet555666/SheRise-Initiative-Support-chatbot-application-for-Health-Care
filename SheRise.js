document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const chatBox = document.getElementById("chat-box");

    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        appendMessage("user", message);
        userInput.value = "";

        // Simulate response from the bot (replace with actual backend call)
        setTimeout(function() {
            const botMessage = getBotResponse(message);
            appendMessage("bot", botMessage);
        }, 500 + Math.random() * 1000); // Simulate varying response time
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender === "user" ? "message-user" : "message-bot");
        messageElement.innerHTML = `
            <p class="mb-0">${message}</p>
        `;
        chatBox.appendChild(messageElement);

        // Scroll to bottom of chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(message) {
        // Replace with actual logic to generate bot responses based on user input
        // For simplicity, returning a static response
        const responses = [
            "I'm sorry, I'm just a demo bot. I don't have real answers yet.",
            "How can I assist you today?",
            "Let me check that for you.",
            "Here is some information that might help.",
            "Please wait while I connect you to a healthcare professional."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
});
