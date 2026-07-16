import { chromium,webkit, test } from "@playwright/test";

test("Load Redbus and Flipkart",async () => {

    const browserEdge = await chromium.launch({headless:false, channel:"msedge"})
    const browserWebkit = await webkit.launch({headless:false})
    
    const edgeInstance = await browserEdge.newContext()
    const webKitInstance = await browserWebkit.newContext()

    const redBus = await edgeInstance.newPage()
    const flipkart = await webKitInstance.newPage()

    await redBus.goto("https://www.redbus.in/")
    console.log(await redBus.title())
    console.log(redBus.url())


    await flipkart.goto("https://www.flipkart.com/")
    console.log(await flipkart.title())
    console.log(flipkart.url())
})