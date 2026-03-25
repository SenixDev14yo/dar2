import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import './CTA.scss';

const CTA = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="cta">
      <div className="cta-bg">
        <div className="cta-pattern"></div>
      </div>
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t.cta.title.split(' ').slice(0, 4).join(' ')} <span>{t.cta.title.split(' ').slice(4).join(' ')}</span></h2>
          <p>{t.cta.subtitle}</p>
          <div className="cta-buttons">
            <Link to="/contacts" className="btn btn-primary">
              {t.cta.btnConsult}
            </Link>
            <Link to="/catalog" className="btn btn-secondary">
              {t.cta.btnCatalog}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;