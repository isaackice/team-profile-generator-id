// connect to the Employee.js
const employee = require("../lib/Employee");

// test the arguments and functions of class Employee

test("Should instantiate Employee instance", () => {
  const newEmployee = new employee();
  expect(typeof newEmployee).toEqual("object");
});

test("Should set name of an Employee", () => {
  const employeeName = "Isaac";
  const Isaac = new employee(employeeName);
  expect(Isaac.name).toBe(employeeName);
});

test("Should set ID of an Employee", () => {
  const employeeID = 1234;
  const Isaac = new employee("Isaac", employeeID);
  expect(Isaac.id).toBe(employeeID);
});

test("Should set email of an Employee", () => {
  const employeeEmail = "example@gmail.com";
  const Isaac = new employee("Isaac", 1234, employeeEmail);
  expect(Isaac.email).toBe(employeeEmail);
});

test("Should get name", () => {
  const employeeName = "Isaac";
  const Isaac = new employee(employeeName);
  expect(Isaac.getName()).toBe(employeeName);
});

test("Should get ID", () => {
  const employeeID = 1234;
  const Isaac = new employee("Isaac", employeeID);
  expect(Isaac.getID()).toBe(employeeID);
});

test("Should get email", () => {
  const employeeEmail = "example@gmail.com";
  const Isaac = new employee("Isaac", 1234, employeeEmail);
  expect(Isaac.getEmail()).toBe(employeeEmail);
});

test("Should get role", () => {
  const employeeRole = "Employee";
  const Isaac = new employee("Isaac", 1234, "example@gmail.com");
  expect(Isaac.getRole()).toBe(employeeRole)
});