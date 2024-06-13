// import function from local file
const findShortestString = require("./find-shortest-string");


test("findShortestString finds the shortest string in an array", () => {
    expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
    expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
  });
  
  test("findShortestString returns the last string in cases of joint Shortest strings", () => {
    expect(findShortestString(["brave", "dance"])).toBe("dance");
    expect(findShortestString(["funny", "bravo"])).toBe("bravo");
    expect(findShortestString(["crazy", "observe"])).toBe("observe");
  });
  