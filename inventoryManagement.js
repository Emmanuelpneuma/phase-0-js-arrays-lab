// Write your code here

const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName){
  products.push(productName);
} 

function updateProductName(position, newName){
  if (position >= 0 && position < products.length) {
    products[position] = newName;
    console.log(Product at position ${position} updated to ${newName});
  }else{
    console.log("Invalid position. No product updated.");
  }
}

function removeLastProduct(){
  if (products.length > 0){
    const removedProduct = products.pop();
    console.log(Removed product: ${removedProduct});
  }else{
    console.log("No products to remove.");
  }
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
