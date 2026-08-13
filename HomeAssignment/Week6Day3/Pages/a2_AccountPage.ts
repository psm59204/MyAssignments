import { LoginPage } from "./a1_login";

export class AccountPage extends LoginPage{

    // Click on the accounts 
    async AccountsButton(){
        await this.page.getByRole('link',{name:'Accounts'}).click()
    }
    // Open create account
    async CreateAccount(){
        await this.page.getByRole('link',{name:'Create Account'}).click()
    }
}