import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import './Features.scss';

const featuresData = [
  { icon: '🏆', title: { ru: 'Гарантия качества', en: 'Quality Guarantee' }, desc: { ru: '5 лет гарантии на всю продукцию', en: '5 years warranty on all products' } },
  { icon: '🚚', title: { ru: 'Бесплатная доставка', en: 'Free Delivery' }, desc: { ru: 'По всей России от 50 000 ₽', en: 'Across Russia from 50,000 ₽' } },
  { icon: '🎨', title: { ru: 'Индивидуальный дизайн', en: 'Custom Design' }, desc: { ru: 'Проектируем под ваши размеры', en: 'Designed to your specifications' } },
  { icon: '👨‍🎨', title: { ru: 'Профессиональные дизайнеры', en: 'Professional Designers' }, desc: { ru: 'Поможем с выбором стиля', en: 'We help choose the style' } },
];

const Features = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="features">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t.features.title.split(' ').slice(0, 2).join(' ')} <span>{t.features.title.split(' ').slice(2).join(' ')}</span></h2>
          <p className="section-subtitle">{t.features.subtitle}</p>
        </motion.div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title[language]}</h3>
              <p>{feature.desc[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;