import {
  CustomerReviews,
  Hero,
  SuperQuality,
  SpecialOffers,
  PopularProduct,
  Services,
  Subscribe,
} from './features';

import Footer from './layouts/Footer';
import Navigation from './layouts/Navigation';

export default function App() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <PopularProduct />
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}
