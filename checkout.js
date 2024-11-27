document.addEventListener("DOMContentLoaded", () => {
    const orderSummaryDiv = document.querySelector('.order-summary');
    const checkoutItem = JSON.parse(localStorage.getItem('checkoutItem'));
  
    if (!checkoutItem) {
      orderSummaryDiv.innerHTML = '<p>No items to display.</p>';
      return;
    }
  
    // Calculate prices
    const shipping = checkoutItem.price * 0.066; // 6.6% of original price
    const tax = checkoutItem.price * 0.033; // 3.3% of original price
    const totalPrice = checkoutItem.price + shipping + tax;
  
    orderSummaryDiv.innerHTML = `
      <h2 class="summary-h2">Order Summary </h2>
      <hr>
      <div class="checkout-item">
        <img src="${checkoutItem.image}" alt="${checkoutItem.name}" class="checkout-item-image" style="width: 150px;">
        <div class="item-details">
          <h3>${checkoutItem.name}</h3>
          <p> ${checkoutItem.brand}</p>
        </div>
      </div>
      <div class="pricing-summary">
        <p>Subtotal: <span>$${checkoutItem.price}</span></p>
        <p>Shipping: <span>$${shipping}</span></p>
        <p>Tax: <span>$${tax}</span></p>
        <hr>
        <p><strong>Total : <span>$${totalPrice}</span></strong></p>
        <button id="place-order">Place Order</button>
      </div>
      
    `;
  
    // Handle Place Order button
    document.getElementById("place-order").addEventListener("click", () => {
      alert("Ordered Successfully");
      localStorage.removeItem('cartItems'); // Clear cart
      window.location.href = 'index.html'; // Redirect to home page
    });
  });
  