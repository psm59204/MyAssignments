import {test} from "@playwright/test"

test("Salesforce Login", async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@id='password']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.locator("//div[@class='slds-icon-waffle']").click()
    await page.locator("(//button[@class='slds-button'])[2]").click()
    await page.locator("//input[@class='slds-input']").fill("Accounts")
    await page.locator("//mark[text()='Accounts']").click()

    await page.locator("//div[@title='New']").click()
    await page.locator("//input[@name='Name']").fill("P.S.Mohan")

    await page.locator("(//button[@part='input-button'])[2]").click()
    await page.locator("//span[text()='Investor']").click()


    await page.locator("(//button[@part='input-button'])[3]").click()
    await page.locator("//span[text()='Agriculture']").click()

    await page.locator("//button[text()='Save']").click()
    
})