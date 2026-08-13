import { AccountPage } from "./a2_AccountPage";

export class CreateAccount extends AccountPage{

    async DetailsFilling (){
        await this.page.locator('//input[@id="accountName"]').fill("Mohan")
        await this.page.locator('//input[@id="groupNameLocal"]').fill("Rahul")
        await this.page.locator('//input[@id="annualRevenue"]').fill("1000000")
        await this.page.locator('//select[@name="industryEnumId"]').selectOption('Computer Software')
        await this.page.locator('//select[@name="ownershipEnumId"]').selectOption('Partnership')
        await this.page.locator('//input[@id="primaryPhoneNumber"]').fill('9600097125')

        await this.page.locator('//select[@name="generalCountryGeoId"]').selectOption('India')
        await this.page.locator('//select[@name="generalStateProvinceGeoId"]').selectOption('TAMILNADU')

    }
    async ClickCreateButton(){

        await this.page.locator('//input[@class="smallSubmit"]').click()
    }
}