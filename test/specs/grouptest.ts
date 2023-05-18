describe("login Feature test", () => {

    describe("Valid login test", () => {

        before("Login app", () => {
            console.log("Logging in to application");
          });

        it("Verify login test1", () => { });

        it("Verify login test2", () => { });

        it.skip("Verify login test3", () => { });

        it("Verify login test4", () => { });

        after("Log out app", () => {
            console.log("Logging out application");
        });

    });

    describe("Invalid login test", () => {

        it("Verify login with invalid credential 1", () => { });

        it("Verify login with invalid credential 2", () => { });

    });

});
//npx mocha ./test/specs/grouptest.ts