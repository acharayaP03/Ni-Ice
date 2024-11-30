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
      <section className="mt-[12rem]">
        <SuperQuality />
      </section>
      <section className="paddind-x mt-[12rem]">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x w-full py-16 sm:py-32">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
}
