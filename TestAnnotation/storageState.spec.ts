import {test,expect} from "@playwright/test"

import data from "../../../Files/SalesForce/leafTaps.json" with {type:"json"}


test ("Login Salesforce", async({page})=>{
    const SalesForceValue :any = data[1]
    await page.goto(SalesForceValue?.URL)
    await page.getByRole('textbox',{name:"Username"}).fill(SalesForceValue?.Username)
    await page.getByRole('textbox',{name:"Password"}).fill(SalesForceValue?.Password)
    await page.getByRole('button').click()

    await page.waitForTimeout(5000)
    // const titlePage = await page.title()
    // console.log(titlePage)
    await expect(page).toHaveTitle("Home | Salesforce")

    await page.context().storageState({path:'TESTLEAF/sf-storage.json'})
    
})