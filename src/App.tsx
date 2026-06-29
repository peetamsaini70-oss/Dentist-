/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { AboutDetails } from './components/AboutDetails';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { ContactDetails } from './components/ContactDetails';
import { Map } from './components/Map';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <AboutDetails />
        <Testimonials />
        <Contact />
        <Map />
        <ContactDetails />
      </main>
    </div>
  );
}
