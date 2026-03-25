import { motion } from 'framer-motion';
import { companyInfo, team, achievements } from '../data/company';
import { gallery } from '../data/reviews';
import './About.scss';

const About = () => {
  return (
    <main className="page-content">
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>О компании <span>Darital</span></h1>
            <p>Создаём уют и комфорт с 2008 года</p>
          </motion.div>
        </div>
      </section>

      <section className="about-history">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Наша <span>история</span></h2>
              <p>Компания Darital была основана в 2008 году с целью создания качественной и доступной мебели для российских потребителей. За 15 лет мы выросли из небольшой мастерской в крупного производителя с собственным производством и сетью салонов по всей России.</p>
              <p>Мы постоянно совершенствуем технологии, следим за трендами в дизайне и расширяем ассортимент. Сегодня в каталоге Darital более 500 наименований мебели для дома и офиса.</p>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500" alt="История компании" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Миссия и <span>ценности</span></h2>
          </motion.div>
          <div className="values-grid">
            {companyInfo.features.map((item, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="value-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-gallery">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Производство</h2>
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
                <img src={img} alt={`Production ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Наша <span>команда</span></h2>
          </motion.div>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="team-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-achievements">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Наши <span>достижения</span></h2>
          </motion.div>
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="achievement-year">{item.year}</span>
                <h3>{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;