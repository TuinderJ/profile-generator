const Manager = require(`../lib/Manager`);

describe("Testing Employee", () => {
  const josh = new Manager({ name: `Josh`, id: 1, email: `josh@josh.com`, officeNumber: 1 });
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
    it("should return the office number that was provided", () => {
      expect(josh.officeNumber).toBe(1);
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
    it("should return Manager", () => {
      expect(josh.getRole()).toBe(`Manager`);
    });
  });
});
