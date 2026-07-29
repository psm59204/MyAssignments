function fibonacci(n:number){
    if (n === 0){
        return 0
    }
    if (n === 1){
        return 1
    }
    let firstNum : number = 0
    let secondNum : number = 1

    for(let i=2;i<=n;i++){
        let thirdNum : number = firstNum + secondNum
        firstNum = secondNum
        secondNum = thirdNum
    }
    return secondNum
}

console.log(fibonacci(0))
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3))
console.log(fibonacci(4))