import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import './About.scss';

const About = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500" alt="About Company" />
            <div className="about-experience">
              <span className="exp-num">15</span>
              <span className="exp-text">{language === 'ru' ? 'лет на рынке' : 'years on market'}</span>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="about-tag">{t.about.company}</span>
            <h2>{t.about.title.split(' ').slice(0, 3).join(' ')} <span>{t.about.title.split(' ').slice(3).join(' ')}</span></h2>
            <p>{language === 'ru' ? 'Ведущий производитель качественной мебели с 2008 года. Мы создаём уют и комфорт в каждом доме.' : 'Leading manufacturer of quality furniture since 2008. We create comfort in every home.'}</p>
            
            <div className="about-features">
              <div className="about-feature">
                <span className="feature-icon">✓</span>
                <span>{language === 'ru' ? 'Собственное производство' : 'Own production'}</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">✓</span>
                <span>{language === 'ru' ? 'Экологичные материалы' : 'Eco-friendly materials'}</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">✓</span>
                <span>{language === 'ru' ? 'Профессиональная команда' : 'Professional team'}</span>
              </div>
            </div>

            <Link to="/about" className="btn btn-primary">
              {t.about.more}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;