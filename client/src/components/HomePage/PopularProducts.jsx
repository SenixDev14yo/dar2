import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import './PopularProducts.scss';

const PopularProducts = () => {
  const { language } = useApp();
  const t = translations[language];
  const popularProducts = products.filter(p => p.popular);

  return (
    <section className="popular-products">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t.products.title.split(' ').slice(0, 2).join(' ')} <span>{t.products.title.split(' ').slice(2).join(' ')}</span></h2>
          <p className="section-subtitle">{t.products.subtitle}</p>
        </motion.div>

        <div className="products-grid">
          {popularProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div 
          className="section-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/catalog" className="btn btn-secondary">
            {t.products.viewAll}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularProducts;