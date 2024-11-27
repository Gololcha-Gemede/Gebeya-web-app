// Add click event listener to all "Add to Cart" buttons
/*      document.querySelectorAll('.add-to-cart').forEach((button, index) => {
  button.addEventListener('click', () => {
    const itemContainer = button.closest('.collection');

    // Retrieve item details
    const image = itemContainer.querySelector("img").src;
    const name = itemContainer.querySelector('.prod-name').textContent;
    const brand = itemContainer.querySelector('.prod-brand').textContent;
    const price = parseFloat(itemContainer.querySelector('.prod-price').textContent.replace('$', ''));
    const rating = itemContainer.querySelector('.prod-rating').textContent;

    // Create an item object
    const newItem = { image, name, brand, price, rating };

    // Get existing cart data from localStorage or initialize as an empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart array
    cartItems.push(newItem);

    // Save the updated cart array back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to the cart page
    window.location.href = 'cart.html';
  });
});   */


// Add click event listener to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    // Find the parent container for the specific item
    const itemContainer = button.closest('li'); // Target the specific item's parent <li>

    // Retrieve the details for the specific item
    const image = itemContainer.querySelector("img").src;
    const name = itemContainer.querySelector('.prod-name').textContent.trim();
    const brand = itemContainer.querySelector('.prod-brand').textContent.trim();
    const price = parseFloat(itemContainer.querySelector('.prod-price').textContent.replace('$', '').trim());
    const rating = itemContainer.querySelector('.prod-rating').textContent.trim();

    // Create an item object with these details
    const newItem = { image, name, brand, price, rating };

    // Get existing cart data from localStorage or initialize as an empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart array
    cartItems.push(newItem);

    // Save the updated cart array back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to the cart page
    window.location.href = 'cart.html';
  });
});

