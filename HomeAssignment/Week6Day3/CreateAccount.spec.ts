import {test} from "@playwright/test"

import { CreateAccount } from "./Pages/a3_CreateAccount"

test("Create Accounts using POM", async ({page})=>{

    let tc = new CreateAccount(page)

    await tc.loadURL("https://leaftaps.com/opentaps/control/main")
    await tc.credentials("Democsr","crmsfa")
    await tc.loginButton()
    await tc.clickCRM()
    await tc.AccountsButton()
    await tc.CreateAccount()
    await tc.DetailsFilling()
    await tc.ClickCreateButton()

    await page.waitForTimeout(5000)
    await page.screenshot()

})