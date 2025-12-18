`use strict`;

function formatMessage(message, maxLength) {
    let newMessage;
    if (message.length <= maxLength) {
        return message
    } else {
        newMessage = message.slice(0, message.length);
        newMessage = newMessage + "..."
        return newMessage;
    }
}
