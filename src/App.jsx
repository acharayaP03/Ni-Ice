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
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}
