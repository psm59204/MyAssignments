import {test,expect} from "@playwright/test"
import path from "path"

test("Multiple files upload", async({page})=>{

    // Navigate to the url
    await page.goto("https://www.leafground.com/file.xhtml")

    //click on the advanced upload choose button
    const inputType = await page.locator("(//input[@type='file'])[2]")

    //set paths for the file upload
    await inputType.setInputFiles([path.join('D:/TestLeaf/Files/fileImage.jpg'),path.join('D:/TestLeaf/Files/FileSample.jpg')])

    await page.waitForLoadState()

    //click on the upload button
    await page.locator("//span[text()='Upload']").click()

    //verifying the successful message
    const verify = await page.locator("//span[text()='Successful']")

    console.log(await verify.innerText())
    await expect(verify).toBeVisible()

})