import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import './Partners.scss';

const partnersList = ['IKEA', 'Hoff', 'Mr.Doors', 'Zov', 'Lazurit', 'Mebelion'];

const Partners = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="partners">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t.partners.title.split(' ').slice(0, 2).join(' ')} <span>{t.partners.title.split(' ').slice(2).join(' ')}</span></h2>
        </motion.div>

        <div className="partners-grid">
          {partnersList.map((partner, index) => (
            <motion.div 
              key={index}
              className="partner-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="partner-logo">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;