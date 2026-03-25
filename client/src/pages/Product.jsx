import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import './Product.scss';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return <div className="page-content">Товар не найден</div>;
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="page-content">
      <section className="product-hero">
        <div className="container">
          <div className="product-layout">
            <motion.div 
              className="product-gallery"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="main-image">
                <img src={product.image} alt={product.name} />
              </div>
            </motion.div>

            <motion.div 
              className="product-info"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>
              <div className="product-price">{formatPrice(product.price)}</div>
              <p className="product-desc">{product.description}</p>

              <div className="product-characteristics">
                <h3>Характеристики</h3>
                <ul>
                  {product.characteristics.map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <button className="btn btn-primary">
                  В корзину
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 01-8 0"/>
                  </svg>
                </button>
                <button className="btn btn-outline">
                  В избранное
                </button>
              </div>

              <div className="product-delivery">
                <div className="delivery-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                  <span>Бесплатная доставка от 50 000 ₽</span>
                </div>
                <div className="delivery-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>Гарантия 5 лет</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-products">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Похожие <span>товары</span></h2>
            </motion.div>
            <div className="related-grid">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Product;