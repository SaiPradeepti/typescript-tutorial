
let car: {brand:string;year:number}  = {brand: 'toyota', year: 2020}

car.brand = 'ford'
// car.color = 'blue' 
// throws error, cannot add color as property
// only two properties that can be added to car are brand and year

let car1: {brand:string;year:number}  = {brand: 'audi', year: 2022}

let book = {title:'book', cost:20};
let pen = {title:'pen', cost:10};
let notebook = {title:'notebook'};  


// let items: {title: string; cost: number}[] = [book, pen, notebook]
// throws error, as notebook needs to have cost
// to make cost property optional add ? 
// make any property readonly by adding the keyword before the variable in type annotation
let items: {readonly title: string; cost?: number}[] = [book, pen, notebook]

// items[0].title = 'paint' // throws error as it is a readonly property 


console.log(items)

// challenge

let bike: {brand: string; year: number} = {brand: 'yamaha', year: 2024}
// bike.year = 'old' // year has to be a number!

let laptop: {brand: string; year: number} = {brand: 'Dell', year: 2023}

let product1 = {title:'shirt', price: 20}
let product2 = {title:'pant'}

let product: {title: string; price?:number}[] = [product1, product2]

// product.push({title:'shoes', price: 'expensive'}) // price has to be number



