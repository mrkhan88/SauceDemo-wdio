import waitPage from "../pageobjects/wait.page.js";

describe("Feature: wait strategy", () => {

    it("should wait for element to appear", async () => {
        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");
        await browser.maximizeWindow();

        await waitPage.clickStartButton();
        await (await waitPage.helloWorldHeader).waitForDisplayed({timeout: 10000, timeoutMsg: "failed for header to appear!"});
        await expect(waitPage.helloWorldHeader).toHaveText("Hello World!");
    })
})