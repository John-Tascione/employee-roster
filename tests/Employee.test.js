const Employee = require("../library/Employee");

test("Can create Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
  const name = "John";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id ", () => {
  const testValue = 1;
  const e = new Employee("John", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "john@test.com";
  const e = new Employee("john", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name ", () => {
  const testValue = "John";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id", () => {
  const testValue = 1;
  const e = new Employee("John", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email", () => {
  const testValue = "john@test.com";
  const e = new Employee("John", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("John", 1, "john@test.com");
  expect(e.getRole()).toBe(testValue);
});
