
function formatErrorMessage(message) {
    return `Formatted Error: ${message}`;
}

export function log(message) {
    console.log(`Note: ${message}`);
}

export function error(message) {
    var errorMessage = formatErrorMessage(message);
    console.log(errorMessage);
}