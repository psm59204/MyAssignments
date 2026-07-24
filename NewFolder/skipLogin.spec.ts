import{test} from "@playwright/test"

test ("Skip Login", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("input[id='username']").fill("Demosalesmanager")
    await page.locator("input[id='password']").fill("crmsfa")
    await page.locator("input[value='Login']").click()

    await page.context().storageState({path: 'TESTLEAF/user.json'})
})