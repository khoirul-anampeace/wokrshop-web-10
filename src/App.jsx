import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import "./App.css";

// Sample data untuk demonstrasi
export const productsData = [
  {
    id: 1,
    name: "Laptop Gaming",
    price: 15000000,
    category: "Electronics",
    image: "https://via.placeholder.com/300x200?text=Laptop+Gaming",
    description: "High-performance gaming laptop with RTX graphics",
    features: ["16GB RAM", "1TB SSD", "RTX 4060", "Intel i7"],
  },
  {
    id: 2,
    name: "Smartphone",
    price: 5000000,
    category: "Electronics",
    image: "https://via.placeholder.com/300x200?text=Smartphone",
    description: "Latest smartphone with advanced camera system",
    features: ["128GB Storage", "5G", "Triple Camera", "AMOLED Display"],
  },
  {
    id: 3,
    name: "Headphones",
    price: 800000,
    category: "Electronics",
    image: "https://via.placeholder.com/300x200?text=Headphones",
    description: "Wireless noise-cancelling headphones",
    features: [
      "Bluetooth 5.0",
      "30hr Battery",
      "Noise Cancelling",
      "Comfort Fit",
    ],
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 1200000,
    category: "Home",
    image: "https://via.placeholder.com/300x200?text=Coffee+Maker",
    description: "Automatic coffee maker with timer",
    features: ["Programmable", "12-cup", "Auto Shut-off", "Water Filter"],
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home products={productsData} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={<Products products={productsData} />}
            />
            <Route
              path="/products/:id"
              element={<ProductDetail products={productsData} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
