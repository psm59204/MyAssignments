import {test,expect} from "@playwright/test"

import leaftapvalues from "../../../Files/SalesForce/leafTaps.json" with {type:"json"}

test.use({
    storageState:'TESTLEAF/sf-storage.json'
})

test("Salesforce Login",async ({page})=>{

    //to increase the timeout
    test.slow()

    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")

        await page.waitForTimeout(5000)
        // const titlePage = await page.title()
        // console.log(titlePage)
        await expect(page).toHaveTitle("Home | Salesforce")
        
    })

// test fail
    test("invalid session",async({page})=>{
    test.fail()
    await page.goto('https://testleaf.lightning.force.com/lightning/o/Opportunity/list?filterName=__Recent')
    const titlePage = await page.title()
    console.log(titlePage)
})

// declaring a variable to json data
const data : any = leaftapvalues[0]

// LeafTaps Login
test.describe("LeafTaps Login", ()=>{

    test("Verify Leaftaps login",async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name:"Username"}).fill(data?.Username)
    await page.getByRole('textbox',{name:"Password"}).fill(data?.Password)
    await page.getByRole('button').click()

})

// test.fixme()
    test("Incomplete flow",async({page})=>{

        test.fixme()
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name:"Username"}).fill(data?.Username)
    await page.getByRole('textbox',{name:"Password"}).fill(data?.Password)
    await page.getByRole('button').click()
    await page.getByText('CRM/SFA').click()

    })

    test("Skipping test",async({page})=>{

        test.skip()
        await page.goto('https://leaftaps.com/opentaps/control/main')
    })
})