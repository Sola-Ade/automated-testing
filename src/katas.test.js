// import function from local file
const copyArrayContent = require("./katas");


console.log(copyArrayContent(["cat", "dog", "fox"], ["bee", "turtle"])),
    "expect" ["bee", "turtle", "cat", "dog", "fox"];

console.log(copyArrayContent([8, 10, 11], [5, 7])), "expect" [5, 7, 8, 10, 11];

console.log(copyArrayContent(["oranges", "cat", "lamp"], [5, 2])),
    "expect" [5, 2, "oranges", "cat", "lamp"];

console.log(copyArrayContent([5, 2], ["oranges", "cat", "lamp"])),
    "expect" ["oranges", "cat", "lamp", 5, 2];

console.log(copyArrayContent([-15, -5], [-11, -3])),
    "expect" [-11, -3, -15, -5];

console.log(copyArrayContent([5.1, 1.5, 5.2, 6.3], [3.2, 5.6, 9.8])),
    "expect" [3.2, 5.6, 9.8, 5.1, 1.5, 5.2, 6.3];

    console.log(
        copyArrayContent(["cup", True, "scissors"], [3.2, False]),
        "expect"[error];