import AppHeader from './layouts/AppHeader/AppHeader';
import ResumePage from './pages/Resume.page';
import HomePage from './pages/Home.page';
import ContactPage from './pages/Contact.page';
import AppFooter from './layouts/AppFooter/AppFooter';
import AboutPage from './pages/About.page';
import PortfolioPage from './pages/Portfolio.page';

const navItems = [
  { name: 'Home', url: '#home' },
  { name: 'About', url: '#about' },
  { name: 'Resume', url: '#resume' },
  { name: 'Portfolio', url: '#portfolio' },
  { name: 'Contact', url: '#contact' },
];

const App: React.FC = () => {
  const children = (
    <>
      <HomePage />
      <AboutPage />
      <ResumePage />
      <PortfolioPage />
      <ContactPage />
      <AppFooter />
    </>
  );
  
  return (
    <div className="App">
      <AppHeader
        navItems={navItems}
        children={children}
      />
    </div>
  );
}

export default App;
