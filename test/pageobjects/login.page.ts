import Page from "./page.js";

class LoginPage extends Page{
    public get inputUsername(){
        return $('#username');
    }

    public get inputPassword(){
        return $('#password');
    }
    public get btnSubmit(){
        return $('button[type="submit"]');
    }

public async login(username: string, password: string){

await this.inputUsername.setValue(username);
await this.inputPassword.setValue(password);
await (await this.btnSubmit).click();

}

public open() {
    return super.open('login');
}

}

export default new LoginPage();