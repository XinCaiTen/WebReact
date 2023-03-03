//import logo from './logo.svg';
import React, { useState, useEffect } from "react";

import './App.scss';
//import MyComponent from './Example/MyComponent';
import Header from '../components/Header';
import Slide from '../components/Slide';
import Search from '../components/Search';
import { Container } from "react-bootstrap";
import Menu from '../components/Menu';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleSearch = (searchQuery) => {
    console.log(searchQuery);
  };
  return (
    <>
      <Header />
      <main>
        <Slide />
        <Container className="py-4">
          <Menu />
          <Search handleSearch={handleSearch} />
          <hr />
          <ProductList products={products} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
