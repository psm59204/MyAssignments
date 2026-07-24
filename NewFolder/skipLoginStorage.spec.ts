import{test} from "@playwright/test"

test("Skip Login Page", async({page})=>{

    page.goto("https://leaftaps.com/opentaps/control/main")

    await page.waitForTimeout(5000)
    await page.getByRole('link',{name:"CRM/SFA"}).click()
    console.log(await page.title())
})