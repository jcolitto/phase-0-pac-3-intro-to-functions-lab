function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
  const cantHear = "I can't hear you!";
  const yesIndeed = "YES INDEED!";
  const dinner = "I would love to!";

  if (string.toLowerCase(string) === string) {
    return cantHear;
  } else if (string.toUpperCase(string) === string) {
    return yesIndeed;
  } else if (string === "Let's have dinner together!") {
    return dinner;
  }

}
