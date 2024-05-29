// array of numbers
let prices:number[] = [23,45,100,90]
prices.push(300)
// prices.push('apple') // throws error


// array of strings
let fruit:string[] = ['apple', 'orange']


// careful with empty array, 
//empty array without any type is assumed as the variable should always be an empty array 
// let randomValue:[] = [40] //throws error
let randomValue:[] = []

let emptyValues:number[] = []
emptyValues = [45]

let names1 = ['peter', 'susan'] // type of names is automatically set to name: string[]
let names2 = ['peter', 'susan', 34] // type of names is automatically set to name: (string|number)[]


let arr: (string|number|boolean)[] = ['git']
arr = ['this','is','lesson',4,true]

// challenge

let temperatures: number[] = [20, 25, 30]
// temperatures.push('hot') //throws error


let colors: string[] = ['red', 'green', 'blue']
// colors.push(true)


let mixedArray: (number | string)[] = [1, 'two', 3]