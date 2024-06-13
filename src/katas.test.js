// import function from local file
const copyArrayContent = require("./katas");

test("copyArrayContent pushes the source array to the end of the destination array", () => {
  expect(copyArrayContent(["cat", "dog", "fox"], ["bee", "turtle"])).toBe[
    ("bee", "turtle", "cat", "dog", "fox")
  ];
  expect(copyArrayContent(["oranges", "cat", "lamp"], [5, 2])).toBe[
    (5, 2, "oranges", "cat", "lamp")
  ];
});
