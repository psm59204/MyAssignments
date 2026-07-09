
function launchBrowser(browserName) {
    if(browserName == "chrome"){
        console.log("The browser is chrome ready for launch");
    }else {
        console.log("The browser is not chrome the launching is stopped")
    }
}
launchBrowser("chrome")

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("The test type is smoke")
            break;
        case "sanity" : 
            console.log("The test type is sanity")
            break
        case "regression" :
            console.log("The test type is regression")
        default:
            console.log("The test type is smoke")
            break;
    }
}runTests("smoke")