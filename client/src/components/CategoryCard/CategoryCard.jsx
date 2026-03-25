import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CategoryCard.scss';

const categoryNames = {
  bedroom: { ru: 'Спальни', en: 'Bedrooms' },
  'living-room': { ru: 'Гостиные', en: 'Living Rooms' },
  kitchen: { ru: 'Кухни', en: 'Kitchens' },
  dining: { ru: 'Столовые', en: 'Dining Rooms' },
  hallway: { ru: 'Прихожие', en: 'Hallways' },
  children: { ru: 'Детские', en: 'Kids Rooms' },
};

const CategoryCard = ({ category, index, language = 'ru' }) => {
  const name = categoryNames[category.slug]?.[language] || category.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/catalog?category=${category.slug}`} className="category-card">
        <div className="category-card__image">
          <img src={category.image} alt={name} />
          <div className="category-card__overlay"></div>
        </div>
        <div className="category-card__content">
          <h3>{name}</h3>
          <span className="category-link">
            {language === 'ru' ? 'Смотреть' : 'View'}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;