import React, { useState } from 'react';

// Sample data for menu items
const menuItems = {
  coffee: [
    { name: 'Cofee 1', price: 10 },
    { name: 'Cofee 2', price: 20 },
    { name: 'Cofee 3', price: 30 },
  ],
  tea: [
    { name: 'tea 1', price: 10 },
    { name: 'tea 2', price: 20 },
    { name: 'tea 3', price: 30 },
  ],
  pastries: [
    { name: 'pastrie 1', price: 10 },
    { name: 'pastrie 2', price: 20 },
    { name: 'pastrie 3', price: 30 },
  ],
};

function MenuItem({ name, price, onAddToCart }) {
  return (
    <li>
      {name} - {price.toFixed(2)} <button onClick={onAddToCart}>Add to Cart</button>
    </li>
  );
}

function MenuSection({ category, items, onAddToCart }) {
  return (
    <section>
      <h2>{category}</h2>
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} onAddToCart={() => onAddToCart(item)} />
        ))}
      </ul>
    </section>
  );
}

function CartItem({ name, price }) {
  return (
    <li>
      {name} - {price.toFixed(2)}
    </li>
  );
}

function Cart({ items }) {
  const total = items.reduce((acc, item) => acc + item.price, 0);
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {items.map((item, index) => (
          <CartItem key={index} name={item.name} price={item.price} />
        ))}
      </ul>
      <p>Total: {total.toFixed(2)}</p>
    </section>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div>
      <header>
        <h1>Coffee Shop</h1>
        <p>Welcome to our coffee shop!</p>
      </header>
      <nav>
        <ul>
          <li><a href="#coffee">Coffee</a></li>
          <li><a href="#tea">Tea</a></li>
          <li><a href="#pastries">Pastries</a></li>
        </ul>
      </nav>
      <main>
        <MenuSection category="Coffee" items={menuItems.coffee} onAddToCart={handleAddToCart} />
        <MenuSection category="Tea" items={menuItems.tea} onAddToCart={handleAddToCart} />
        <MenuSection category="Pastries" items={menuItems.pastries} onAddToCart={handleAddToCart} />
        <Cart items={cartItems} />
      </main>
    </div>
  );
}

export default App