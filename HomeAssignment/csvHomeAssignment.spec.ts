import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from "fs"


//reading the data from csv file
let loginDetails : any[] = parse(fs.readFileSync('Files/loginData.csv',"utf-8"),{skip_empty_lines:true,columns:true})

//creating loop to iterate data from csv 
for(let credentials of loginDetails){

    test (`Login to leaftaps with csv file ${credentials.tcid}`, async({page})=>{

        // navigating to website
        await page.goto("https://leaftaps.com/opentaps/control/main")

        //declaring the login credentials
        await page.getByRole('textbox',{name:"Username"}).fill(credentials.username)
        await page.getByRole('textbox',{name:"Password"}).fill(credentials.password)
        
        //clicking the login button
        await page.getByRole('button').click()
    })
}


