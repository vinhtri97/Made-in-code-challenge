const products = [
    {name: "Stainless 10\"", weight: 1.5, price: 65, size: 10, id: 12},
    {name: "Stainless 12\"", weight: 1.8, price: 85, size: 12, id: 13},
    {name: "Carbon Steel 10\"", weight: 1.5, price: 75, size: 10, id: 23},
    {name: "Carbon Steel 12\"", weight: 1.95, price: 75, size: 12, id: 24},
    {name: "Nonstick 10\"", weight: 2.0, price: 70, size: 10, id: 3},
    {name: "Nonstick 12\"", weight: 2.0, price: 70, size: 12, id: 4}
]
const main = (() => {
    console.log('Problem 1. Return an array of only the products that are priced greater than or equal to 75.')
    console.log(products.filter(({price}) => price >= 75))
    
    console.log('Problem 2. Return an array of only the products that are heavier than 1.8.')
    console.log(products.filter(({weight}) => weight > 1.8))

    console.log('Problem 3. Transform the array into an object, where the keys are IDs and the values are the remaining object properties.')
    console.log(products.reduce((accumulator, {id, ...rest}) => ({...accumulator, [id]: rest}), {}))
})()