import React, { useState, useEffect } from 'react';

function CakeContent({ updateCartItemCount }) {
  const [itemCount, setItemCount] = useState(0);
  const [cakeCount, setCakeCount] = useState(1); // Initialize the cake count to 1
  const originalPrice = 549;
  const discount = 0.4;
  const [selectedQuantity, setSelectedQuantity] = useState('1/2');
  const [discountedPrice, setDiscountedPrice] = useState(calculateDiscountedPrice());

  function calculateDiscountedPrice() {
    const quantity = parseFloat(selectedQuantity);
    return (originalPrice * quantity * (1 - discount)).toFixed(2);
  }

  // Function to handle quantity change
  function handleQuantityChange(event) {
    setSelectedQuantity(event.target.value);
  }

  // Function to update the cart item count
  function updateCart() {
    const newCount = itemCount + 1;
    setItemCount(newCount);
    updateCartItemCount(newCount); // Call the prop function to update the cart item count in App.js
  }

  // Function to increment the cake count
  function incrementCakeCount() {
    const newCakeCount = cakeCount + 1;
    setCakeCount(newCakeCount);
  }

  // Function to decrement the cake count
  function decrementCakeCount() {
    if (cakeCount > 1) {
      const newCakeCount = cakeCount - 1;
      setCakeCount(newCakeCount);
    }
  }

  useEffect(() => {
    // Calculate the initial discounted price whenever the selectedQuantity changes
    setDiscountedPrice(calculateDiscountedPrice());
  }, [selectedQuantity]);

  return (
    <div className="container mt-4">
      <div className="row cake-content">
        <div className="col-md-6 cake-image">
          <img src="/reg_cake_img/rg1.png" alt="Cake Image" className="img-fluid" />
        </div>
        <div className="col-md-6 cake-details">
          <h2 className="cake-name">Chocolate Truffle Fudge Cake</h2>
          <div className="discounted-price">
            <p className="discount-text">
              <span className="discount-percent">-40%</span>
              <i className="bi bi-currency-rupee"></i>
              <span id="discounted-price">{discountedPrice}</span>
            </p>
          </div>
          <p className="original-price">
            <s><i className="bi bi-currency-rupee"></i>549</s>
          </p>
          <div className="form-group">
            <label htmlFor="quantity">Quantity (kg):</label>
            <select
              className="form-control quantity-dropdown"
              id="quantity"
              value={selectedQuantity}
              onChange={handleQuantityChange}
            >
              <option value="1/2">1/2</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more quantity options if needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cakeCount">Number of Cakes:</label>
            <div className="cake-count">
              <button className="btn btn-sm btn-custom" onClick={decrementCakeCount}>-</button>
              <span className="cake-count-value">{cakeCount}</span>
              <button className="btn btn-sm btn-custom" onClick={incrementCakeCount}>+</button>
            </div>
          </div>
          <div className="action-buttons">
            <button
              id="add-to-cart-button"
              className="btn btn-primary btn-custom"
              onClick={updateCart}
            >
              Add to Cart
            </button>
            <button className="btn btn-success btn-custom">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CakeContent;
