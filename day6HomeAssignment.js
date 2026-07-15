let browser = "chrome"

function checkBrowserVersion(cb){
    setTimeout(() => {cb(browser)}, 2000);
    
} 
function callback(c){
    console.log("Log the browser version = "+c);
}
checkBrowserVersion(callback)