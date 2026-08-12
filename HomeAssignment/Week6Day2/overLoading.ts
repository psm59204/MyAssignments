class APIClient{
    sendRequest(endpoint:string):void
    sendRequest(endpoint:string, requestBody:string, requestStatus:boolean):void

    sendRequest(endpoint:string, requestBody?:string, requestStatus?:boolean){
        if (endpoint){
            console.log("Endpoint value is ",endpoint)
        }
        else if(requestBody){
            console.log("The request body ", requestBody)
        }
        else{
            console.log(requestStatus)
        }
    }
}
let sq = new APIClient()
sq.sendRequest("Element found")
sq.sendRequest("Element found in the console", "Component of the request body ", true)