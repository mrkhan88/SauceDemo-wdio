describe("feature: login", () => {

  before("Login app", () => {
    console.log("Logging in to application");
  });

  it("Verify login test1", () => {});

  it("Verify login test2", () => {});

  it.skip("Verify login test3", () => {});

  it("Verify login test4", () => {});

  after("Log out app", () => {
      console.log("Logging out application");
  });

});
//npx mocha ./test/specs/test.ts