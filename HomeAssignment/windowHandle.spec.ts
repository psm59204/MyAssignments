import{test} from "@playwright/test"

test("Window Handling", async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml")

    const newTab = context.waitForEvent('page')

    await page.locator("//span[text()='Open']").click()

    const newWindow = await newTab
    
    await page.waitForTimeout(3000)

    await newWindow.getByRole('textbox',{name:'E-mail Address'}).fill("testleaf@gmail.com")
    
    newWindow.close()

    await page.bringToFront()

    await page.locator("//span[text()='Open Multiple']").click()

    const windows = context.pages()
    console.log("Total no of windows = ", windows.length)  
})