// Write your code here
// 1. Create the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// 2. Function to log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// 3. Function to add a new product
function addProduct(productName) {
  products.push(productName);
}

// 4. Function to update a product name at a specific index
function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName;
  } else {
    console.log("Invalid position.");
  }
}

// 5. Function to remove the last product
function removeLastProduct() {
  products.pop();
}

// === Testing the functions (optional, you can remove or comment these out if needed) ===
console.log("Initial products:", products);

logFirstProduct(); // Expected: "Laptop"

addProduct("Tablet");
console.log("After adding Tablet:", products); // Expected: [..., "Tablet"]

updateProductName(1, "Smartphone");
console.log("After updating index 1 to Smartphone:", products); // Expected: ["Laptop", "Smartphone", ...]

removeLastProduct();
console.log("After removing last product:", products); // "Tablet" should be gone

// Needed for testing
module.exports = {
  ...(typeof products !== 'undefined' && { products }),
  ...(typeof logFirstProduct !== 'undefined' && { logFirstProduct }),
  ...(typeof addProduct !== 'undefined' && { addProduct }),
  ...(typeof updateProductName !== 'undefined' && { updateProductName }),
  ...(typeof removeLastProduct !== 'undefined' && { removeLastProduct })
};



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
