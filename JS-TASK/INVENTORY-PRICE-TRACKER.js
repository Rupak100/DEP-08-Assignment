const products_obj =[   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];
 
const updatedProducts_obj = products_obj.map(product => {
    if (product.quantity > 100) {
        return {
            ...product,
            price: product.price * 0.9  
        };
    }
    return product;
});
 
const discountedProducts_obj = updatedProducts_obj.filter(product => {
    const originalProduct = products_obj.find(p => p.id === product.id);
    return product.price < originalProduct.price;
});
 
console.log("Products with applied discounts:");
discountedProducts_obj.forEach(product => {
    console.log(`${product.name}: New price $${product.price}`);
});
 
console.log("\nAll Updated Products:", updatedProducts_obj);
console.log("\nDiscounted Products Only:", discountedProducts_obj);