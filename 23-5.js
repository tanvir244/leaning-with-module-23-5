
// 23_5-2 (Advanced) Find The Matching Product By Searching Products
const products = [
    {id: 1, name: 'xiami phone', price: 19000},
    {id: 2, name: 'iPhone', price: 19000},
    {id: 3, name: 'apple Laptop', price: 19000},
    {id: 4, name: 'lenovo laptop', price: 19000},
    {id: 5, name: 'dell Laptop', price: 19000},
    {id: 6, name: 'samsung phone', price: 19000},
    {id: 7, name: 'nokia Phone', price: 19000},
]

function matchedProduct(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProduct(products, 'laptop');
console.log(result);