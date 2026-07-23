import {test} from "@playwright/test"
test ("Create a Lead using Playwright Locators", async ({page}) =>{


    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.getByRole('textbox',{name:"Username"}).fill("Demosalesmanager")
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByText('CRM/SFA').click()
    await page.getByRole('link',{name:"Leads"}).click()
    await page.getByRole('link',{name:"Create Lead"}).click()
    await page.locator("//input[@id='createLeadForm_companyName']").fill("pstech")
    await page.locator("//input[@id='createLeadForm_firstName']").fill("Mohan")
    await page.locator("//input[@id='createLeadForm_lastName']").fill("P.S")
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Mr.")
    await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill("CEO")
    await page.locator("[name='annualRevenue']").fill("7500000000")
    await page.locator("#createLeadForm_departmentName").fill("Software Testing")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9600097120")
    await page.getByRole('button',{name:"Create Lead"}).click()

    await page.close()
})