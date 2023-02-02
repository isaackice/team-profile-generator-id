// connect to the Manager.js
const Manager = require("../lib/Manager");

// test the arguments and functions added in class Engineer

test("Should set office number", () => {
    const managerNumber = "1234";
    const Isaac = new Manager("Isaac", 1234, "example@gmail.com", managerNumber);
    expect(Isaac.number).toBe(managerNumber);
});

test("Should get school", () => {
    const managerNumber = "1234";
    const Isaac = new Manager("Isaac", 1234, "example@gmail.com", managerNumber);
    expect(Isaac.getNumber()).toBe(managerNumber);
  });

test("Should get role", () => {
    const managerRole = "Manager";
    const Isaac = new Manager("Isaac", 1234, "example@gmail.com", "1234");
    expect(Isaac.getRole()).toBe(managerRole);
});