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
import { ConfidentialityPage, TermsPage } from './components/PolicyPage';
import { EthicsPage } from './components/EthicsPage';
import { LangProvider } from './context/LangContext';

const path = window.location.pathname;

function Main() {
  if (path === '/confidentiality') return <ConfidentialityPage />;
  if (path === '/term-of-use') return <TermsPage />;
  if (path === '/ethics') return <EthicsPage />;

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

function App() {
  return (
    <LangProvider>
      <Main />
    </LangProvider>
  );
}

export default App;
