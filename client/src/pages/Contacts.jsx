import { useState } from 'react';
import { motion } from 'framer-motion';
import { faqItems } from '../data/faq';
import './Contacts.scss';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <main className="page-content">
      <section className="contacts-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Контакты и <span>связь</span></h1>
            <p>Свяжитесь с нами любым удобным способом</p>
          </motion.div>
        </div>
      </section>

      <section className="contacts-content">
        <div className="container">
          <div className="contacts-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-block">
                <h3>Адрес</h3>
                <p>Москва, ул. Примерная 15, стр. 1</p>
              </div>
              <div className="contact-block">
                <h3>Телефон</h3>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                <a href="tel:+78001234567">8 (800) 123-45-67</a>
              </div>
              <div className="contact-block">
                <h3>Email</h3>
                <a href="mailto:info@darital.ru">info@darital.ru</a>
              </div>
              <div className="contact-block">
                <h3>Время работы</h3>
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
              <div className="social-links">
                <button className="social-link">VK</button>
                <button className="social-link">Telegram</button>
                <button className="social-link">WhatsApp</button>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Оставьте <span>заявку</span></h2>
              <p>Заполните форму, и наш менеджер свяжется с вами</p>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <textarea 
                  placeholder="Сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                <button type="submit" className="btn btn-primary">
                  Отправить заявку
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contacts-map">
        <div className="map-placeholder">
          <div className="map-content">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <p>Москва, ул. Примерная 15</p>
          </div>
        </div>
      </section>

      <section className="contacts-faq">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Часто задаваемые <span>вопросы</span></h2>
          </motion.div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {item.question}
                  <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                </button>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;