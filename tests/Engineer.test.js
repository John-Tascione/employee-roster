const Engineer = require("../library/Engineer");

test("Can set GitHUb", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "john@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("John", 1, "john@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "john@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
