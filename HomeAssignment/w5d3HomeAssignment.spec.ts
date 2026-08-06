import {test} from "@playwright/test"
import dotenv from "dotenv"
import fs from "fs"
import {parse} from "csv-parse/sync"

//impoerting json file
import data from "../../Files/DataParameterization/cred.json" with {type:"json"}
let datas : any[]

// accessing the env file 
let fileName =process.env.envFile || "HA_qa" || "HA_prod"
dotenv.config({path:`Files/DataParameterization/${fileName}.env`})

test.describe.serial("test runs in serial mode" ,async()=>{

    // test before all to access the datas
test.beforeAll("Database for the Testleaf lead creation", async()=>{
datas= parse(fs.readFileSync('Files/DataParameterization/data.csv','utf-8'),{columns:true,skip_empty_lines:true})
})

// before each hooks
test.beforeEach("Login functionality",async({page})=>{
    await page.goto(process.env.HG_url as string)
    await page.getByRole('textbox',{name:"Username"}).fill(process.env.HG_username as string)
    await page.getByRole('textbox',{name:"Password"}).fill(process.env.HG_password as string)
    await page.getByRole('button').click()
    await page.getByRole('link',{name:"CRM/SFA"}).click()
})

test('To create lead', async({page})=>{

    await page.getByRole('link',{name:"Leads"}).click()
    await page.getByRole('link',{name:"Create Lead"}).click()
    //input credentials from csv files
    await page.locator("//input[@id='createLeadForm_companyName']").fill(datas[0].companyName)
    await page.locator("//input[@id='createLeadForm_firstName']").fill(datas[0].firstName)
    await page.locator("//input[@id='createLeadForm_lastName']").fill(datas[0].lastName)

    // dropdown values from json file
    await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption(data.source)

    const dropDown= await page.locator('//select[@name="marketingCampaignId"]')
        // selecting option  
    await dropDown.selectOption({value : "DEMO_MKTG_CAMP"})

    // getting all the values from dropdown
    const dropCount = await dropDown.count()
    for (let i = 0; i<dropCount; i++){
        console.log(await dropDown.nth(i).innerText())
    }

    await page.locator('//select[@name="industryEnumId"]').selectOption({index:5})
    await page.locator('//select[@name="currencyUomId"]').selectOption('INR - Indian Rupee')
    await page.locator('//select[@name="generalCountryGeoId"]').selectOption({value:"IND"})
    await page.locator('//select[@name="generalStateProvinceGeoId"]').selectOption("TAMILNADU")

    const states = await page.locator('//select[@name="generalStateProvinceGeoId"]')
    const statesCount = await states.count()

    console.log("The count of the Indian States is = ",statesCount)
    // printing the states dropdown values
    for(let j=0;j<statesCount;j++){
        console.log(await states.nth(j).innerText())
    }

    await page.getByRole('button',{name:"Create Lead"}).click()

    
})
})
