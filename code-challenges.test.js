// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.


// describe("codedMessage", () => {
//     it("returns a string with a coded message.", () => {
//         const secretCodeWord1 = "Lackadaisical"
//             // Expected output: "L4ck4d41s1c4l"
//         const secretCodeWord2 = "Gobbledygook"
//             // Expected output: "G0bbl3dyg00k"
//         const secretCodeWord3 = "Eccentric"
//             // Expected output: "3cc3ntr1c"
//         expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })



// // b) Create the function that makes the test pass.

// // Pseudo code:
 
// // 1.) Declare a function with a parameter(string)

// const codedMessage = (string) => {

// // 2.) After creating the function, we need to find a built-in method that can change the requested values in any string we add to this function.

// return string.replaceAll("a", "4").replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0").replaceAll("E", "3");

// // I would put more time into not hard coding the capitol "E" and to have a dynamic code to where if I put a character in it'll change whether capitolized or not.
    
    
// }

// // codedMessage(secretCodeWord1)
// // codedMessage(secretCodeWord2)
// // codedMessage(secretCodeWord3)

// // --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// // a) Create a test with expects statement using the variable provided.

// describe("allWords", () => {
//     it("returns an array of all the words containing that particular letter.", () => {
//         expect(allWords(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(allWords(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const filterLetterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const filterLetterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

// // b) Create the function that makes the test pass.

// // pseudocode

// // 1.) Declare the allWords function to take in the array.

// const allWords = (word, letter) => {

// // 2.) Return the .filter() HOF that takes the value placeholder thats required. We must create logic that iterates over the elements in the array. The logic also has to identify the placeholder of the specified characters and filter out the element containing that character.

//     return word.filter((value) => value.toLowerCase().includes(letter))
    
    
// }

// console.log(allWords(filterLetterA))
// console.log(allWords(filterLetterE))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// Pseudo code:

// a) Create a test with expect statements using the variable provided.

// describe("fullHouse", () => {
//     it("determines whether or not the array is a full house.", () => {
    const hand1 = [5, 5, 5, 3, 3]
//     // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
//     // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
//     // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
//     // Expected output: true
//  expect(fullHouse(hand1)).toEqual(true)
//         expect(fullHouse(hand2)).toEqual(false)
//         expect(fullHouse(hand3)).toEqual(false)
//         expect(fullHouse(hand4)).toEqual(true)
//     })
// })



// b) Create the function that makes the test pass.

// Pseudo code:

// 1.) We have declare a function that takes in an array.
 
const fullHouse = (array) => {
    let sortedArray = array.sort()


// 2.) We have to iterate over the array to check all the elements in the array. As it iterates, we have to also create the logic to identify 3 of a kind with one number and 2 of a kind of another number. 

   
// 3.) We also have to write a conditional statement to say if you have 3 of a kind(the fitst number) between 2 and 10; and 2 of a kind of a different number between 2 and 10, to return the boolean value of true. And have an else cath all statement of false as the return value.

    if (sortedArray[0] === sortedArray[1] && sortedArray[0] === sortedArray[2] && sortedArray[3] === sortedArray[4]
        || sortedArray[0] === sortedArray[1] && sortedArray[2] === sortedArray[3] && sortedArray[2] === sortedArray[4]) {
        
        return true
    } else {
        return false
    }
}

console.log(fullHouse(hand4))