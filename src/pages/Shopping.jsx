import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Shopping = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
    { id: 3, name: "Product C", price: 200 },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header />
      <div className="container mb-5" style={{ marginTop: "80px" }}>
        <h1 className="mb-4">Shopping Cart</h1>
        <div className="row">
          {/* Products List */}
          <div className="col-md-6">
            <h2>Products</h2>
            <ul className="list-group">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{product.name}</strong> - ${product.price}
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cart */}
          <div className="col-md-6">
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="list-group">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{item.name}</strong> (x{item.quantity}) - $
                        {item.price * item.quantity}
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <h5>Total Items: {totalItems}</h5>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shopping;
