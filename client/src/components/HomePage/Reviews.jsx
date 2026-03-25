import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import { reviews } from '../../data/reviews';
import './Reviews.scss';

const Reviews = () => {
  const { language } = useApp();
  const t = translations[language];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <section className="reviews">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t.reviews.title.split(' ').slice(0, 2).join(' ')} <span>{t.reviews.title.split(' ').slice(2).join(' ')}</span></h2>
          <p className="section-subtitle">{t.reviews.subtitle}</p>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="review-stars">{renderStars(review.rating)}</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <div className="author-avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{review.name}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;