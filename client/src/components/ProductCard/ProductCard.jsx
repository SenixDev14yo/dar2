import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductCard.scss';

const ProductCard = ({ product, index }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`} className="product-card__image">
        <img src={product.image} alt={product.name} />
        {product.popular && <span className="badge">Hit</span>}
      </Link>
      <div className="product-card__content">
        <Link to={`/product/${product.id}`} className="product-card__title">
          {product.name}
        </Link>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__bottom">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <button className="add-to-cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;