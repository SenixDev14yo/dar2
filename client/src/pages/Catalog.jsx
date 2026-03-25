import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard/ProductCard';
import { products, categories } from '../data/products';
import './Catalog.scss';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="page-content">
      <section className="catalog-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Каталог <span>мебели</span></h1>
            <p>Более 500 моделей для вашего дома</p>
          </motion.div>
        </div>
      </section>

      <section className="catalog-content">
        <div className="container">
          <div className="catalog-layout">
            <aside className="catalog-sidebar">
              <div className="sidebar-section">
                <h3>Категории</h3>
                <ul className="category-list">
                  <li>
                    <button 
                      className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                      onClick={() => handleCategoryChange('all')}
                    >
                      Все категории
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button 
                        className={`category-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(cat.slug)}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Цена</h3>
                <div className="price-inputs">
                  <input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                    placeholder="От"
                  />
                  <span>—</span>
                  <input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                    placeholder="До"
                  />
                </div>
              </div>
            </aside>

            <div className="catalog-main">
              <div className="catalog-toolbar">
                <span className="results-count">Найдено: {filteredProducts.length} товаров</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="default">Сортировка</option>
                  <option value="price-asc">Сначала дешевые</option>
                  <option value="price-desc">Сначала дорогие</option>
                  <option value="name">По названию</option>
                </select>
              </div>

              <div className="products-grid">
                {paginatedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                  >
                    ←
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button 
                      key={i + 1}
                      className={currentPage === i + 1 ? 'active' : ''}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => p + 1)}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;