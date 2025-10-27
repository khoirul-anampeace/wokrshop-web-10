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
    image:
      "https://exceldisc.com/_next/image?url=https%3A%2F%2Fapiv2.exceldisc.com%2Fmedia%2F48762%2Flenovo-legion-pro-9-16irx9-2024-gaming-laptop-2tb-ssd.jpg&w=3840&q=75",
    description: "High-performance gaming laptop with RTX graphics",
    features: ["16GB RAM", "1TB SSD", "RTX 4060", "Intel i7"],
  },
  {
    id: 2,
    name: "Smartphone",
    price: 5000000,
    category: "Electronics",
    image:
      "https://images.samsung.com/id/smartphones/galaxy-z-flip7/buy/kv_animated_MO.png",
    description: "Latest smartphone with advanced camera system",
    features: ["128GB Storage", "5G", "Triple Camera", "AMOLED Display"],
  },
  {
    id: 3,
    name: "Headphones",
    price: 800000,
    category: "Electronics",
    image:
      "https://www.sony.co.id/image/fb0ca0319f3f6fc16dfc08f6ff1cdb38?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
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
    image:
      "https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1713289861/prod/content/dam/CRO-Images-2024/Home/CR-Home-InlineHero-Best-Espresso-Machines-0424",
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
