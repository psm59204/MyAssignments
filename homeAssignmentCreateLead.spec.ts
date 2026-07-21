import{test} from "@playwright/test"

test ("Create a Lead", async ({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("input[id='username']").fill("Demosalesmanager")
    await page.locator("input[id='password']").fill("crmsfa")
    await page.locator("input[value='Login']").click()

    await page.locator("a[style='color: black;']").click()
    await page.locator("a[href='/crmsfa/control/leadsMain']").click()
    await page.locator("a[href='/crmsfa/control/createLeadForm']").click()
    await page.locator("input[id='createLeadForm_companyName']").fill("psm")
    await page.locator("input[id='createLeadForm_firstName']").fill("Mohan")
    await page.locator("input[id='createLeadForm_lastName']").fill("P S")
    await page.locator("input[id='createLeadForm_personalTitle']").fill("Mr.")
    await page.locator("input[id='createLeadForm_generalProfTitle']").fill("Test Analyst")
    await page.locator("input[id='createLeadForm_annualRevenue']").fill("75000000")
    await page.locator("input[id='createLeadForm_departmentName']").fill("Testing")
    await page.locator("input[id='createLeadForm_primaryPhoneNumber']").fill("9600097121")
    await page.locator("input[type='submit']").click()

    await page.close()
    
})