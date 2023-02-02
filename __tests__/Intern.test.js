// connect to the Intern.js
const Intern = require("../lib/Intern");

// test the arguments and functions added in class Engineer

test("Should set school", () => {
  const internSchool = "Rutgers Bootcamp";
  const Isaac = new Intern("Isaac", 1234, "example@gmail.com", internSchool);
  expect(Isaac.school).toBe(internSchool);
});

test("Should get school", () => {
  const internSchool = "Rutgers Bootcamp";
  const Isaac = new Intern("Isaac", 1234, "example@gmail.com", internSchool);
  expect(Isaac.getSchool()).toBe(internSchool);
});

test("Should get role", () => {
  const internRole = "Intern";
  const Isaac = new Intern("Isaac", 1234, "example@gmail.com", "Rutgers Bootcamp");
  expect(Isaac.getRole()).toBe(internRole);
});