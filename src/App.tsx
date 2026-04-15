import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Practices } from './components/Practices';
import { Stages } from './components/Stages';
import { Cases } from './components/Cases';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Practices />
        <Stages />
        <Cases />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
