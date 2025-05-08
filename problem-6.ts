/**
 * Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.
Interface & Function Signature:
interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null
Example:
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
getMostExpensiveProduct(products);  
// Output: { name: "Bag", price: 50 }
 */

interface Product {
    name: string;
    price: number;
}


function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    
    return products.reduce((max, product) => 
        product.price > max.price ? product : max
    );
}

const products: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50}
];

console.log(getMostExpensiveProduct(products))