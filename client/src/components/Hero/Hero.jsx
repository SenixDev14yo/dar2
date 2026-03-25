import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import './Hero.scss';

const Hero = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-tag">{t.hero.tag}</span>
            <h1>
              {t.hero.title.split(' ').slice(0, 2).join(' ')} 
              <span> {t.hero.title.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p>{t.hero.subtitle}</p>
            <div className="hero-btns">
              <Link to="/catalog" className="btn btn-primary">
                {t.hero.btnCatalog}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t.hero.btnAbout}
              </Link>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">15</span>
                <span className="stat-label">{t.hero.years}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">5K+</span>
                <span className="stat-label">{t.hero.clients}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">5</span>
                <span className="stat-label">{t.hero.guarantee}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600" 
                alt="Premium Furniture" 
              />
              <motion.div 
                className="hero-card card-1"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="card-icon">🛡️</div>
                <div className="card-text">
                  <span>5 {language === 'ru' ? 'лет' : 'years'}</span>
                  <span>{language === 'ru' ? 'гарантии' : 'warranty'}</span>
                </div>
              </motion.div>
              <motion.div 
                className="hero-card card-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="card-icon">🚚</div>
                <div className="card-text">
                  <span>{language === 'ru' ? 'Бесплатно' : 'Free'}</span>
                  <span>{language === 'ru' ? 'доставка' : 'delivery'}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <span>{t.hero.scroll}</span>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;