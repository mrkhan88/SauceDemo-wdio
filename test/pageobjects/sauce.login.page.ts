import Page from "./page.js";

class SauceLoginPage extends Page {
  private get userNamebox() {
    return $("#user-name");
  }
  private get passwordNameBox() {
    return $("#password");
  }
  private get submitBtn() {
    return $(".submit-button.btn_action");
  }
  public get productLocator() {
    return $(".title");
  }
  async performLogin(username: string, password: string) {
    await this.userNamebox.setValue(username);
    await this.passwordNameBox.setValue(password);
    await this.submitBtn.click();
  }
 async openAPP(appurl: string){
    await browser.url(appurl);
    await browser.maximizeWindow();
 }
}
export default new SauceLoginPage();
