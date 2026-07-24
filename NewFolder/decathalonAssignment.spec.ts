import {expect, test,} from "@playwright/test"

test("Decathalon automation", async({page})=>{

    await page.goto("https://www.decathlon.in/")
    await page.waitForTimeout(10000)
    await page.locator("//input[@type='search']").fill('shoes')
    await page.locator("//input[@type='search']").press('Enter')
    
    const titlePage = await page.title()
    console.log(titlePage);

    expect(titlePage).toContain("Search | shoes")

    //select the category as sports shoe
    await page.getByRole('button',{name:"Category"}).click()
    await page.locator("//span[text()='Sport shoes']").click()
    await page.getByRole('button',{name:"Category"}).click()

    //select gender
    await page.getByRole('button',{name:"Gender"}).click()
    await page.locator("//label[@data-test-id='filter-item-gender_id_en-MEN']").click()
    await page.getByRole('button',{name:"Gender"}).click()

    //select size
    await page.getByRole('button',{name:"Size"}).click()
    await page.locator('//span[text()="10.5"]').click()
    await page.getByRole('button',{name:"Size"}).click()

    //sort Price:High to low
    await page.getByRole('button',{name:"Most relevant"}).click()
    await page.getByRole('option',{name:"Price (low → high)"}).click()

    //selecting the first product and choosing size
    await page.locator("//div[contains(text(),'Slipon Skateboarding Canvas shoe - Khaki')]").click()
    await page.getByRole('button',{name:"Select size 10.5"}).click()
    await page.getByText('Add to cart').click()
    await page.locator(" //h3[text()='Product(s) added to cart']").isVisible()
    await page.getByRole('button',{name:"Go to cart"}).click()
    const totalValue = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]').innerText()
    console.log("The total value is = ",totalValue)
})