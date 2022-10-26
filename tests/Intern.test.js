const Intern = require("../library/Intern");

test("Can set school", () => {
  const testValue = "Indiana";
  const e = new Intern("John", 1, "john@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("John", 1, "john@test.com", "Indiana");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Indiana";
  const e = new Intern("John", 1, "john@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
