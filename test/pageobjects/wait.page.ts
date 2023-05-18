class WaitPage {

    private get startButton() {
        return $("#start>button")
    }

    get helloWorldHeader(){
        return $("#finish>h4")
    }
    async clickStartButton() {
        await this.startButton.click();
    }

}
export default new WaitPage();