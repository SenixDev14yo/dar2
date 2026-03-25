import { motion } from 'framer-motion';
import CategoryCard from '../CategoryCard/CategoryCard';
import { categories } from '../../data/products';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import './Categories.scss';

const Categories = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="categories">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t.categories.title.split(' ').slice(0, 2).join(' ')} <span>{t.categories.title.split(' ').slice(2).join(' ')}</span></h2>
          <p className="section-subtitle">{t.categories.subtitle}</p>
        </motion.div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;