const products = [
    { id: 1, name: "Apple", price: 1.00 },
    { id: 2, name: "Banana", price: 2.50 },
    { id: 3, name: "Orange", price: 2.75 },
];

let cart = [];

function displayProducts() {
const productList = document.getElementById('product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(productDiv);
});
}
function addToCart(productId) {
const product = products.find(p => p.id === productId);
cart.push(product);
displayCart();
}   
function displayCart() {
const cartDiv = document.getElementById('cart');
cartDiv.innerHTML = '';
cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
    cartDiv.appendChild(itemDiv);
});
updateTotal();
}
function removeFromCart(index) {
cart.splice(index, 1);
displayCart();
}
function updateTotal() {
const totalDiv = document.getElementById('total');
const total = cart.reduce((sum, item) => sum + item.price, 0);
totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}
displayProducts();