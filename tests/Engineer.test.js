const Engineer = require(`../lib/Engineer`);

describe("Testing Engineer", () => {
  const josh = new Engineer({ name: `Josh`, id: 1, email: `josh@josh.com`, github: `TuinderJ` });
  describe("Testing Constructor", () => {
    it("should return the name that was provided", () => {
      expect(josh.name).toBe(`Josh`);
    });
    it("should return the id that was provided", () => {
      expect(josh.id).toBe(1);
    });
    it("should return the email that was provided", () => {
      expect(josh.email).toBe(`josh@josh.com`);
    });
    it("should return the github username that was provided", () => {
      expect(josh.github).toBe(`TuinderJ`);
    });
  });

  describe("getName()", () => {
    it("should return the name that was provided to it in the constructor", () => {
      expect(josh.getName()).toBe(`Josh`);
    });
  });
  describe("getId()", () => {
    it("should return the ID that was provided to it in the constructor", () => {
      expect(josh.getID()).toBe(1);
    });
  });
  describe("getEmail()", () => {
    it("should return the email that was provided to it in the constructor", () => {
      expect(josh.getEmail()).toBe(`josh@josh.com`);
    });
  });
  describe("getGithum()", () => {
    it("should return the github username that was provided to it in the constructor", () => {
      expect(josh.getGithub()).toBe(`TuinderJ`);
    });
  });
  describe("getRole()", () => {
    it("should return Engineer", () => {
      expect(josh.getRole()).toBe(`Engineer`);
    });
  });
});
