import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import './Stats.scss';

const statsData = [
  { value: '15+', labelKey: 'years' },
  { value: '5K+', labelKey: 'clients' },
  { value: '150+', labelKey: 'employees' },
  { value: '50+', labelKey: 'awards' },
];

const Stats = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="stats">
      <div className="stats-bg"></div>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{t.stats[stat.labelKey]}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;