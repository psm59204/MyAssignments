import test from "node:test"

export class WebComponent{

    selector : string
    constructor (selector:string){
        this.selector = selector
    }

    public click(){
        console.log(`Simulating a Click ${this.selector}`)
    }
    focus(){
        console.log(`Focusing on element ${this.selector}`)
    }
}

    class Button extends WebComponent{
        override click(): void {
            console.log("Clicking on the button")
        }
    }
    class TextInput extends WebComponent{
        value : string =""

        enterText (text: string){
            this.value = text
            console.log(`Entered Text ${text}`)
        }
    }

    function testComponents() {
        const login = new Button("LoginButton")
        const userName = new TextInput ("UserName")

        // button class 
        login.click()
        login.focus()

        //TextInput class
        userName.click()
        userName.focus()
        userName.enterText("Mohan P S")
        
    }
    testComponents()