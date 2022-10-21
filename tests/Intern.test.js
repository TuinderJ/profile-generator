const Intern = require(`../lib/Intern`);

describe("Testing Intern", () => {
  const josh = new Intern({ name: `Josh`, id: 1, email: `josh@josh.com`, school: `DU` });
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
    it("should return the school that was provided", () => {
      expect(josh.school).toBe(`DU`);
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
  describe("getRole()", () => {
    it("should return Intern", () => {
      expect(josh.getRole()).toBe(`Intern`);
    });
  });
  describe("getSchool()", () => {
    it("should return DO", () => {
      expect(josh.getSchool()).toBe(`DU`);
    });
  });
});
