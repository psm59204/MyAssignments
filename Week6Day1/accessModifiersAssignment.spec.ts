import {test,expect} from "@playwright/test"

class LoginTest{
    public browserName : string  = "chrome"
    private password : string ="crmsfa"
    protected userName : string = "DemoCSR"

    public async openApplication(page:any){

            await page.goto("https://leaftaps.com/opentaps/control/main")
    }
    public async LoginFunctions(page:any){
        
        await page.getByRole('textbox',{name:"Username"}).fill(this.userName)
        await page.getByRole('textbox',{name:"Password"}).fill(this.password)
        await page.getByRole('button').click()
        await page.getByText('CRM/SFA').click()

        const title = await page.title()
        console.log(title)

    }
}

    const loginTest = new LoginTest()

    test("Login TestLeaf", async({page})=>{
    await loginTest.openApplication(page)
    await loginTest.LoginFunctions(page)
    })
    
