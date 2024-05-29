// Union type allows us to setup variable which can be anyone of the multiple types mentioned
let tax:number | string = 10; // tax can be either number or string
tax = '$10'


// literals
let requestStatus: 'pending' | 'success' | 'error' = 'pending';

requestStatus = 'error' // can assign any of the value mentioned
requestStatus = 'pending'
// requestStatus = 'shakeAndBake' // throws error if not from the values


// type any
let notSure: any = 4;
notSure = false;
notSure = "string"

// useCase
const books = ['1984', 'Brave New World', 'TypeScript']

let foundBook: string | undefined;

for(let book of books){
    if(book == '1983'){
        foundBook = book;
        break;
    }
}

console.log(foundBook?.length)



let discount : number | string = 20;
discount = "20%"



let orderStatus : 'processing' | 'shipped' | 'delivered' = 'processing'

// orderStatus = 'cancelled';
orderStatus = 'shipped'

