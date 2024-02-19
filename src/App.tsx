import AppHeader from './layouts/AppHeader/AppHeader';
import ResumePage from './pages/Resume.page';
import HomePage from './pages/Home.page';
import ContactPage from './pages/Contact.page';
import AppFooter from './layouts/AppFooter/AppFooter';
import AboutPage from './pages/About.page';
import PortfolioPage from './pages/Portfolio.page';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

const navItems = [
  { name: 'Home', url: '#home' },
  { name: 'About', url: '#about' },
  { name: 'Resume', url: '#resume' },
  { name: 'Portfolio', url: '#portfolio' },
  { name: 'Contact', url: '#contact' },
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset ||
        document.documentElement.scrollTop;
      console.log(scrollTop);
      setIsScrolled(scrollTop > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className="App" onScroll={() => (setIsScrolled(true))}>
      <AppHeader
        navItems={navItems}
        isScrolled={isScrolled}
      />
      <Box sx={{paddingTop: isScrolled ? '64px' : '0', transition: 'padding-top 1s ease',}}>
      <HomePage />
      <AboutPage />
      <ResumePage />
      <PortfolioPage />
      <ContactPage />
      <AppFooter />
    </Box>
    </div>
  );
}

export default App;
