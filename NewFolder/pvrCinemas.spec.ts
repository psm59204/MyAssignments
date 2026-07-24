import{test} from "@playwright/test"

test("Movie Ticket Booking", async({page})=>{

    await page.goto("https://www.pvrcinemas.com/")
   
    await page.getByRole('heading',{name:"Chennai"}).click()
    await page.locator("//span[text()='Cinema']").click()
    await page.locator("//span[text()='Select Cinema']").click()
    await page.locator("//span[text()='INOX National,Virugambakkam Chennai']").click()

     await page.locator("//span[contains(text(),'Tomorrow')]").click()
    await page.locator("//li[@role='option']/span[text()='JANA NAYAGAN']").click()
    await page.locator("//span[text()='09:05 AM']").click()
    await page.getByRole('button',{name:"Submit"}).click()
    await page.getByRole('button',{name:"Accept"}).click()
    
    await page.locator("//button[text()='Accept']").click()

    await page.locator("//td[@class='seats-col']/span[@id='PR.PREMIERE|A:10']").click()

    console.log(await page.locator("//div[@class='grand-total']").textContent(), " is ", await page.locator("//div[@class='grand-prices']").textContent())


})