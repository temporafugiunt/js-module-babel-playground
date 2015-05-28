
function formatErrorMessage(message) {
    return `ERROR: ${message}`;
}

export function log(message) {
	if (typeof console !== "undefined" || typeof console.log !== "undefined") {
	    console.log(message);
	}
}

export function error(message) {
    var errorMessage = formatErrorMessage(message);
    log(errorMessage);
}