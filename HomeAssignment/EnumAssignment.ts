
enum Environment{

    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

function runTests(testEnv:Environment):void{
    if(testEnv === Environment.LOCAL){
        console.log("Test is running in LOCAL Environment");
    }
    if(testEnv === Environment.DEVELOPMENT){
        console.log("Test is running in DEVELOPMENT Environment");
    }
    else if(testEnv === Environment.STAGING){
        console.log("Test is running in STAGING Environment");
    }
    else if(testEnv === Environment.PRODUCTION){
        console.log("Test is running in PRODUCTION Environment");
    }
    else{
        console.log("Invalid Environment")
    }
}
runTests(Environment.PRODUCTION)
runTests(Environment.STAGING)

/*  Can also use Switch
 function runTests(testEnv:Environment):void{
    switch (testEnv) {
        case Environment.LOCAL:
            console.log("Test is running in LOCAL Environment");
            break;
        case Environment.DEVELOPMENT:
            console.log("Test is running in DEVELOPMENT Environment");
            break;
        case Environment.STAGING:
            console.log("Test is running in STAGING Environment");
            break;
        case Environment.PRODUCTION:
            console.log("Test is running in PRODUCTION Environment");
            break;
        default:
            console.log("Environment is Invalid");     
    }
}
runTests(Environment.PRODUCTION)
runTests(Environment.LOCAL) */

