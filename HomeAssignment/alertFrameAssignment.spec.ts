import {test, expect} from "@playwright/test"

test("Automating Alert & Frame Interactions", async({page})=>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    

    page.on('dialog',async(alert)=>{
    let alertType=alert.type()
    console.log(alertType);

    let alertMessage=alert.message()
    console.log(alertMessage);
    alert.accept()

    })
    const frame =page.frameLocator('//iframe[@id="iframeResult"]')
    await frame?.locator("//button[text()='Try it']").click()

    const clickMessage =await frame.locator('//p[text()="You pressed OK!"]').innerText()
    console.log(clickMessage)
})