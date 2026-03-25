import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import { gallery } from '../../data/reviews';
import './Gallery.scss';

const Gallery = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="gallery">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t.gallery.title.split(' ').slice(0, 2).join(' ')} <span>{t.gallery.title.split(' ').slice(2).join(' ')}</span></h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </motion.div>

        <div className="gallery-grid">
          {gallery.map((img, index) => (
            <motion.div 
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={img} alt={`Gallery ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;