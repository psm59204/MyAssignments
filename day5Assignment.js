
// Example 1
let string1 = "Learning String"
let arr =(string1.split(" "));
console.log("The last word is "+arr[1]+" and the length is "+arr[1].length)

// Example 2

let string2 = "I am Learning Playwright in TestLeaf"
let s = string2.split(/\s+/)
let l = s[s.length - 1]
let e = l.length
console.log("The last word is "+l+ " And the length is "+e)

//Example 3
 
function isAnagram(str, str1) {
    let newStr = str.toLowerCase()
    let newStr1 = str1.toLowerCase()

    let sort1 = newStr.split('').sort().join("") 
    let sort2 = newStr1.split('').sort().join("") 

    // console.log(sort1, sort2);
    if (sort1===sort2){
        console.log("the strings are anagram")
    }else{
        console.log("The are not Anagram");
        
    }
    
}isAnagram("Hello", "eloH")