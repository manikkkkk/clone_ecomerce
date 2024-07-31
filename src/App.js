import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Filters from './components/Filters';
import Sorting from './components/Sorting';
import Pagination from './components/Pagination';
import products from './mockData';
import './App.css';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleFilterChange = (type, value) => {
    let newProducts = products;

    if (type === 'category' && value) {
      newProducts = newProducts.filter(product => product.category === value);
    }

    if (type === 'price' && value) {
      const [min, max] = value.split('-').map(Number);
      newProducts = newProducts.filter(product => product.price >= min && product.price <= max);
    }

    setFilteredProducts(newProducts);
  };

  const handleSortChange = (sortBy) => {
    let newProducts = [...filteredProducts];

    if (sortBy === 'price') {
      newProducts.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(newProducts);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="App">
      <Header />
      <Filters onFilterChange={handleFilterChange} />
      <Sorting onSortChange={handleSortChange} />
      <div className="product-list">
        {paginatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
