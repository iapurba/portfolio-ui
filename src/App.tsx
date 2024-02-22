import AppHeader from './layouts/AppHeader/AppHeader';
import ResumePage from './pages/Resume.page';
import HomePage from './pages/Home.page';
import ContactPage from './pages/Contact.page';
import AppFooter from './layouts/AppFooter/AppFooter';
import AboutPage from './pages/About.page';
import PortfolioPage from './pages/Portfolio.page';
import { useEffect, useRef, useState } from 'react';
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
    const [activeMenuItem, setActiveMenuItem] = useState<string>("home");

    const homePageRef = useRef<HTMLDivElement>(null);
    const aboutPageRef = useRef<HTMLDivElement>(null);
    const resumePageRef = useRef<HTMLDivElement>(null);
    const portfolioPageRef = useRef<HTMLDivElement>(null);
    const contactPageRef = useRef<HTMLDivElement>(null);

    const handleMenuClick = (page: string) => {
        setActiveMenuItem(page);
        console.log(activeMenuItem);
    };

    useEffect(() => {
        // Set scroll restoration to manual
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);

        // Reset scroll restoration to auto when the component unmounts
        return () => {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset ||
                document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    const scrollIntoAbout = () => {
        setActiveMenuItem("about");
        aboutPageRef.current?.scrollIntoView();
    };

    const scrollIntoContact = () => {
        setActiveMenuItem("contact");
        contactPageRef.current?.scrollIntoView();
    };

    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    switch (entry.target.id) {
                        case "about":
                            setActiveMenuItem("about");
                            break;
                        case "resume":
                            setActiveMenuItem("resume");
                            break;
                        case "portfolio":
                            setActiveMenuItem("portfolio");
                            break;
                        case "contact":
                            setActiveMenuItem("contact");
                            break;
                        default:
                            setActiveMenuItem("home");
                            break;
                    }
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (homePageRef.current) {
            observer.observe(homePageRef.current);
        }

        if (aboutPageRef.current) {
            observer.observe(aboutPageRef.current);
        }

        if (resumePageRef.current) {
            observer.observe(resumePageRef.current);
        }

        if (portfolioPageRef.current) {
            observer.observe(portfolioPageRef.current);
        }

        if (contactPageRef.current) {
            observer.observe(contactPageRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="App" onScroll={() => (setIsScrolled(true))}>
            <AppHeader
                navItems={navItems}
                isScrolled={isScrolled}
                activeMenuItem={activeMenuItem}
                onMenuClick={handleMenuClick}
            />
            <Box>
                <HomePage
                    id="home"
                    isActive={activeMenuItem === "home"}
                    scrollIntoAbout={scrollIntoAbout}
                    ref={homePageRef}
                />
                <AboutPage
                    id="about"
                    isActive={activeMenuItem === "about"}
                    scrollIntoContact={scrollIntoContact}
                    ref={aboutPageRef}
                />
                <ResumePage
                    id="resume"
                    isActive={activeMenuItem === "resume"}
                    ref={resumePageRef}
                />
                <PortfolioPage
                    id="portfolio"
                    isActive={activeMenuItem === "portfolio"}
                    ref={portfolioPageRef}
                />
                <ContactPage
                    id="contact"
                    isActive={activeMenuItem === "contact"}
                    ref={contactPageRef}
                />
                <AppFooter />
            </Box>
        </div>
    );
}

export default App;
