// cart.js

function addToCart(productName, price, image) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price, quantity: 1, image });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
  window.location.href = 'cart.html';
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  let total = 0;

  if (!container || !totalDisplay) return;

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    totalDisplay.textContent = '';
    return;
  }

  cart.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    `;
    container.appendChild(div);
    total += item.price * item.quantity;
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function displayCheckoutSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('checkout-items');
  const totalDisplay = document.getElementById('checkout-total');
  let total = 0;

  if (!container || !totalDisplay) return;

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    totalDisplay.textContent = '';
    return;
  }

  cart.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('checkout-item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <p>${item.quantity} x $${item.price.toFixed(2)}</p>
      </div>
    `;
    container.appendChild(div);
    total += item.price * item.quantity;
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function clearCart() {
  localStorage.removeItem('cart');
  location.reload();
}
