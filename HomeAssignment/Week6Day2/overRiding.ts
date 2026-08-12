class BasePage{

    findElement(){
        console.log("Find the Element")
    }
    clickElement(){
        console.log("Perform click action on the element")
    }
    enterText(){
        console.log("Fill the textBox with common values")
    }
    performCommonTask(){
        console.log("DropDown handling")
    }
}

//another class to override the performTask method
class LoginPage extends BasePage{
    performCommonTask(): void {
        console.log("Scroll into the view")
    }
}

// creating objects to call the methods 
    let BC = new BasePage()
    let LP = new LoginPage()

    BC.clickElement()
    BC.enterText()
    BC.findElement()
    BC.performCommonTask()
    LP.performCommonTask()

