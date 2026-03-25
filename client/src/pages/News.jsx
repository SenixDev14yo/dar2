import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { news } from '../data/news';
import './News.scss';

const News = () => {
  return (
    <main className="page-content">
      <section className="news-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Новости и <span>статьи</span></h1>
            <p>Актуальные новости, полезные советы и интересные статьи о мебели и дизайне</p>
          </motion.div>
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          <div className="news-grid">
            {news.map((item, index) => (
              <motion.div 
                key={item.id}
                className="news-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/news/${item.id}`} className="news-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-category">{item.category}</span>
                </Link>
                <div className="news-body">
                  <span className="news-date">{item.date}</span>
                  <Link to={`/news/${item.id}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="read-more">
                    Читать далее
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;