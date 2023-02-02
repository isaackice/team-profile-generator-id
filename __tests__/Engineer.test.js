// connect to the Engineer.js
const Engineer = require("../lib/Engineer");

// test the arguments and functions added in class Engineer

test("Should set GitHub account", () => {
  const engineerGh = "isaackice";
  const Isaac = new Engineer("Isaac", 1234, "example@gmail.com", engineerGh);
  expect(Isaac.github).toBe(engineerGh);
});

test("Should get GitHub account", () => {
  const engineerGh = "isaackice";
  const Isaac = new Engineer("Isaac", 1234, "example@gmail.com", engineerGh);
  expect(Isaac.getGithub()).toBe(engineerGh);
});

test("Should get role", () => {
  const engineerRole = "Engineer";
  const Isaac = new Engineer("Isaac", 1234, "example@gmail.com", "isaackice");
  expect(Isaac.getRole()).toBe(engineerRole);
});