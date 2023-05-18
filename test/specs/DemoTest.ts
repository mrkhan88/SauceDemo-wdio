import SauceLoginPage from "../pageobjects/sauce.login.page.js";

describe("Login Funcionality check", () => {
  beforeEach("Open app", async () => {
    await SauceLoginPage.openAPP('https://saucedemo.com');
  });

  it("should login in with valid credential", async () => {
    const userNameBox = $("#user-name");
    const passwordNameBox = $("#password");
    const submitBtn = $(".submit-button.btn_action");
    await browser.url("https://saucedemo.com");
    await userNameBox.setValue("standard_user");
    await passwordNameBox.setValue("sA123432j");
    expect()
    await submitBtn.click();

    // await SauceLoginPage.performLogin("standard_user", "secret_sauce");
    // expect(SauceLoginPage.productLocator).toBeDisabled();
  });

  it.skip("should not login in with invalid credential", async () => {
    const userNameBox = $("#user-name");
    const passwordNameBox = $("#password");
    const submitBtn = $(".submit-button.btn_action");
    await browser.url("https://saucedemo.com");
    await userNameBox.setValue('standard_user');
    await passwordNameBox.setValue("F3232D");
    browser.pause(3000)
    await submitBtn.click();

    // await SauceLoginPage.performLogin("standard_user", "secret_sauce");
    // expect(SauceLoginPage.productLocator).toBeDisabled();
  });



});
