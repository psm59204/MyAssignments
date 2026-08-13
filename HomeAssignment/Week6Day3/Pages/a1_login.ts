import {chromium, Page} from "@playwright/test"

export class LoginPage{

    page:Page

    constructor (tpage : Page){
        this.page = tpage
    }

    // to load url 
    async loadURL(url:string){
        await this.page.goto(url)
    }
    // credentials for the login page
    async credentials(userName: string, passWord:string){
        await this.page.getByRole('textbox',{name:'Username'}).fill(userName)
        await this.page.getByRole('textbox',{name:'Password'}).fill(passWord)
    }
    // login button click action
    async loginButton(){
        await this.page.getByRole('button').click()
    }
    // browser closing method
    async browserClose(){
        await this.page.close()
    }
    // welcome page clicking on the CRM/SFA button
    async clickCRM(){
        await this.page.getByRole('link',{name:'CRM/SFA'}).click()
    }
}