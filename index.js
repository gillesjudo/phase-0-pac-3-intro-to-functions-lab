let string ="Hello";
function shout(string) {;
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
return console.log(string.toUpperCase());
}
logShout(string);
function logWhisper(string) {
console.log(string.toLowerCase());
}
logWhisper(string);

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) { 
    return "I can't hear you!";
    }
    if (string === string.toUpperCase()) {
    return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
    return "I would love to!";
    }
}