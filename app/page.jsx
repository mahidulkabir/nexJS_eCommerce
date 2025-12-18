import { Button } from '@/components/ui/button';
import { WEBSITE_LOGIN, WEBSITE_REGISTER } from '@/routes/WebsiteRoute';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  // Inline CSS objects
  const headerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
  };

  const navStyle = {
    backgroundColor: "#555",
    padding: "10px",
    textAlign: "center",
  };

  const navLinkStyle = {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
  };

  const mainStyle = {
    padding: "20px",
    maxWidth: "1200px",
    margin: "auto",
  };

  const sectionStyle = {
    marginBottom: "40px",
  };

  const sectionTitleStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const productGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  const productCardStyle = {
    backgroundColor: "white",
    padding: "15px",
    width: "200px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    textAlign: "center",
  };

  const categoryCardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    width: "180px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    cursor: "pointer",
  };

  const testimonialCardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    maxWidth: "300px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const buttonStyle = {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
  };

  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", margin: 0, padding: 20 }}>
      {/* Header */}
      <header style={headerStyle}>
        <h1>My E-commerce Store</h1>
      </header>

      {/* Navigation */}
      <nav style={navStyle}>
        <Link href="#" style={navLinkStyle}>Home</Link>
        <Link href="#" style={navLinkStyle}>Shop</Link>
        <Link href="#" style={navLinkStyle}>Contact</Link>
        <Link href={WEBSITE_LOGIN} style={navLinkStyle}>Login</Link>
        <Link href={WEBSITE_REGISTER} style={navLinkStyle}>Register</Link>
      </nav>

      <main style={mainStyle}>
        {/* Featured Products */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Featured Products</h2>
          <div style={productGridStyle}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={productCardStyle}>
                <img src={`https://picsum.photos/200?random=${i+1}`} alt={`Product ${i+1}`} style={{ width: "100%", height: "auto" }} />
                <h3>Product {i+1}</h3>
                <p>${(19.99 + i*10).toFixed(2)}</p>
                <button style={buttonStyle}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Shop by Category</h2>
          <div style={productGridStyle}>
            {["Electronics", "Clothing", "Accessories", "Home"].map((cat, i) => (
              <div key={i} style={categoryCardStyle}>
                <img src={`https://picsum.photos/150?random=${i+10}`} alt={cat} style={{ width: "100%", borderRadius: "8px" }} />
                <h4>{cat}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>What Our Customers Say</h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {["Alice", "Bob", "Charlie"].map((name, i) => (
              <div key={i} style={testimonialCardStyle}>
                <p>Great products and fast delivery!</p>
                <strong>- {name}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Subscribe to Our Newsletter</h2>
          <div style={{ textAlign: "center" }}>
            <input type="email" placeholder="Enter your email" style={{ padding: "10px", width: "300px", marginRight: "10px" }} />
            <button style={buttonStyle}>Subscribe</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        &copy; 2025 My E-commerce Store
      </footer>
    </div>
  );
};

export default Page;
