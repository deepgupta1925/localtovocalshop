// script.js
let cart = [];

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Perform search logic here (replace this with your actual search logic)
    const searchTerm = searchInput.value.toLowerCase();

    // Display the search results container
    searchResults.style.display = 'block';

    // Clear previous results
    searchResults.innerHTML = '';

    // Filter products based on the search term
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    // Display the search results
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<p>${product.name} - ${product.price.toFixed(2)}</p>`;
            searchResults.appendChild(resultItem);
        });
    } else {
        searchResults.innerHTML = '<p>No results found</p>';
    }
}


function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    }):
}

let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function searchProducts() {
    // Your existing searchProducts logic
}

function proceedToCheckout() {
    // Implement your checkout logic here
    alert('Proceeding to checkout!'); // Placeholder for actual checkout logic
}


function orderNow(productName, price) {
    alert(`Order placed for ${productName} at ${price.toFixed(2)}`);
    // Here you could send an order to the server, handle payments, etc.
}