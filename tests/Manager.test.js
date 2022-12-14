const Manager = require("../library/Manager");
const Employee = require("../library/Employee");

test("Can set office number", () => {
  const testValue = 1;
  const e = new Manager("John", 1, "john@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("John", 1, "john@test.com", 1);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 1;
  const e = new Manager("John", 1, "john@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
