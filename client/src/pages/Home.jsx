import Hero from '../components/Hero/Hero';
import Features from '../components/HomePage/Features';
import Categories from '../components/HomePage/Categories';
import PopularProducts from '../components/HomePage/PopularProducts';
import About from '../components/HomePage/About';
import Stats from '../components/HomePage/Stats';
import Gallery from '../components/HomePage/Gallery';
import Reviews from '../components/HomePage/Reviews';
import Partners from '../components/HomePage/Partners';
import CTA from '../components/HomePage/CTA';

const Home = () => {
  return (
    <main className="page-content">
      <Hero />
      <Features />
      <Categories />
      <PopularProducts />
      <About />
      <Stats />
      <Gallery />
      <Reviews />
      <Partners />
      <CTA />
    </main>
  );
};

export default Home;