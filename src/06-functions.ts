
function sayHi(name: string){
    console.log(name)
}

sayHi('Samoyed')

// number of arguments passed should be equal to the number of parameters specified
// sayHi('Samoyed',9)

function calDiscount(price:number): (number | string){
    const hasDiscount = true
    if(hasDiscount)
        return price*0.9;
    else
        return 'sorry! there\'s no discount on this item';
}

const finalPrice = calDiscount(200)

