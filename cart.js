document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");

  // Retrieve cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  function renderCartItems() {
    cartItemsContainer.innerHTML = ""; // Clear previous content

    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    cartItems.forEach((item, index) => {
      const cartItemHTML = `
        <div class="cart-item" data-index="${index}">
          <div class="cart-images">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <p>Share this product</p>
            <img src="./assets/home-icons/Frame 74 .png" alt="Frame 74">
            
          </div>
          <div class="cart-item-details">
            <h3>${item.name}</h3>
            <p>Brand: ${item.brand}</p>
            <hr>
            <p> $${item.price}</p>
            <p>50 units left </p>
            <p>+ shipping fee may vary o  location.
            <p> ${item.rating}</p>
            <hr>
            <div class="quantity-control">
              <p>Quantity: <button class="decrease" data-index="${index}">-</button>
              <span class="quantity" id="quantity-${index}">1</span>
              <button class="increase" data-index="${index}">+</button> 
              </p>
            </div>
            <p class="size-p"><img src="./assets/Cart-images/Frame 176.png" alt="">  <span>see all size guides</span></p>
            <p class="color-p"><img src="./assets/Cart-images/Frame 152.png" alt=""></p>
            <div class="btn-class"> 
              <button class="remove" data-index="${index}">Remove</button>
              <button class="checkout">Checkout</button>
             </div>
             <p>Pickup and pay on collection available</p>
          </div>
          
        </div>
      `;
      cartItemsContainer.innerHTML += cartItemHTML;
    });
  }

  // Handle Quantity Controls
  cartItemsContainer.addEventListener("click", (event) => {
    const index = event.target.getAttribute("data-index");
    const quantityElement = document.getElementById(`quantity-${index}`);
    let quantity = parseInt(quantityElement.textContent);

    if (event.target.classList.contains("increase")) {
      quantity++;
    } else if (event.target.classList.contains("decrease") && quantity > 1) {
      quantity--;
    }

    quantityElement.textContent = quantity;
  });

  // Remove Item from Cart
  cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      const index = event.target.getAttribute("data-index");
      cartItems.splice(index, 1); // Remove item from array
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update localStorage
      renderCartItems(); // Re-render cart items
    }
  });

  // Checkout Button Logic
  cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("checkout")) {
      const index = event.target.closest(".cart-item").getAttribute("data-index");
      const item = cartItems[index]; // Get the clicked item
      const checkoutData = { image: item.image, name: item.name, brand: item.brand, price: item.price };

      // Pass data to checkout page using localStorage
      localStorage.setItem('checkoutItem', JSON.stringify(checkoutData));

      // Redirect to checkout page
      window.location.href = 'checkout.html';
    }
  });

  // Initial render
  renderCartItems();
});
