
function factorial(n:number){
    if (n<0){
        console.log("The number less than zero")
    }
    let value:number = 1
    for (let i = 2;i<=n;i++){
        value = value * i
    }
    return value
}
console.log(factorial(5))