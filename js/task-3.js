`use strict`;

function checkForSpam(message) {
    const control = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")
    return control;
}

