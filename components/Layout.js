import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Icon, NavDropdown } from '../components';
import Link from 'next/link';

export default function Layout({ children }) {
  const router = useRouter();
  const currentPage = router.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);

  // Scroll to top on page change and close mobile menu
  useEffect(() => {
    if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
        setIsMenuOpen(false); // Close mobile menu on navigation
    }
  }, [currentPage]);

  const navLinks = [
    { name: 'Home', path: '/' }, // Use / for homepage in Next.js
    {
      name: 'Guides',
      children: [
        { name: 'How to Grow', path: '/how-to-grow' },
        { name: 'Soil Guide', path: '/soil-guide' },
        { name: 'Fertilizing', path: '/fertilizer' },
        { name: 'Trellis Guide', path: '/trellis-guide' },
        { name: 'Varieties', path: '/varieties' },
        { name: 'Pests & Diseases', path: '/pests' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Free Calendar', path: '/free-calendar' },
    { name: 'About Us', path: '/about' },
  ];

  // For footer links
  const footerNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'How to Grow', path: '/how-to-grow' },
    { name: 'Soil Guide', path: '/soil-guide' },
    { name: 'Fertilizing', path: '/fertilizer' },
    { name: 'Trellis Guide', path: '/trellis-guide' },
    { name: 'Varieties', path: '/varieties' },
    { name: 'Pests & Diseases', path: '/pests' },
  ];

  return (
    <div className="font-sans text-gray-800 dark:text-slate-200 transition-colors duration-300">
      <Head>
        <title>Pitaya Dragonfruit Mastery: Expert Guides & Tips for Growing Sweet Success</title>
        <meta
          name="description"
          content="Unlock the secrets to thriving pitaya dragonfruit gardens. Learn planting, care, harvesting, and pest control strategies—plus essential pitaya cultivation tips."
        />
        <meta
          name="keywords"
          content="pitaya dragonfruit, growing dragonfruit, pitaya cultivation tips, dragonfruit care and maintenance, pitaya farm, pitaya varieties, best soil for pitaya, dragonfruit trellis ideas, pitaya fertilization schedule, organic pitaya farming, how to grow pitaya dragonfruit from cuttings, best climate for pitaya production, pitaya irrigation and watering tips, dragonfruit pest and disease control, pitaya dragonfruit nutritional benefits"
        />
        <meta
          property="og:title"
          content="Pitaya Dragonfruit Mastery: Expert Guides & Tips for Growing Sweet Success"
        />
        <meta
          property="og:description"
          content="Unlock the secrets to thriving pitaya dragonfruit gardens. Learn planting, care, harvesting, and pest control strategies—plus essential pitaya cultivation tips."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pitaya Dragonfruit Mastery" />
        <link rel="icon" href="/favicon.ico" /> {/* Add a favicon to your public directory */}
      </Head>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .text-shadow { text-shadow: 1px 1px 3px rgba(0,0,0,0.4); }
        .text-shadow-md { text-shadow: 2px 2px 5px rgba(0,0,0,0.5); }
        .prose blockquote {
            font-style: italic;
            color: inherit;
            border-left-width: 4px;
            border-color: #16a34a; /* green-600 */
            padding-left: 1em;
        }
        .dark .prose blockquote {
            border-color: #22c55e; /* green-500 */
        }
      `}</style>

      {/* Header */}
      <header className="bg-gradient-to-r from-brand-dark to-brand text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/#main-content" className="sr-only focus:not-sr-only text-white bg-brand p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-accent">Skip to main content</Link>
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Icon name="plant" className="w-8 h-8 text-accent"/>
            <span className="text-xl font-bold text-white">GrowingDragonFruit.com</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                link.children ? (
                  <NavDropdown key={link.name} item={link} currentPage={currentPage} />
                ) : (
                  <Link key={link.path} href={link.path} className={`pb-1 font-semibold transition-all duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${currentPage === link.path ? 'text-accent border-b-2 border-accent' : 'text-white hover:text-accent'}`}>{link.name}</Link>
                )
              ))}
            </nav>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open mobile menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon name={isMenuOpen ? "x" : "menu"} className="w-8 h-8 text-white"/>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-brand-dark text-white shadow-xl absolute top-full left-0 w-full animate-fade-in-down">
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map(link => {
                if (link.children) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileGuidesOpen(!mobileGuidesOpen)}
                        aria-expanded={mobileGuidesOpen}
                        className="w-full py-3 px-4 text-left rounded-md font-semibold flex justify-between items-center hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <span>{link.name}</span>
                        <svg className={`w-5 h-5 transition-transform duration-200 ${mobileGuidesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                      {mobileGuidesOpen && (
                        <div className="flex flex-col space-y-1 pl-4 ml-4 border-l-2 border-brand">
                          {link.children.map(child => (
                            <Link
                              key={child.path}
                              href={child.path}
                              className={`block w-full py-2 px-4 text-left rounded-md font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${currentPage.startsWith(child.path) ? 'bg-brand-light text-brand-dark' : 'hover:bg-brand text-white'}`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block py-3 px-4 text-left rounded-md font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${currentPage === link.path ? 'bg-brand-light text-brand-dark' : 'hover:bg-brand text-white'}`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </header>

      <main id="main-content">{children}</main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerNavLinks.map(link => (
                  <li key={link.path}><Link href={link.path} className="text-gray-200 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-200 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">FAQs</Link></li>
                <li><Link href="/free-calendar" className="text-gray-200 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">Free Care Calendar</Link></li>
                <li><Link href="/blog" className="text-gray-200 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-200 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-200 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-200 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">Privacy Policy</Link></li>{/* Add privacy policy page */}
                <li><Link href="/terms-of-service" className="text-gray-200 hover:text-white transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">Terms of Service</Link></li>{/* Add terms of service page */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400">To create an authoritative resource for DIYers and hobby gardeners interested in growing dragon fruit, empowering them to cultivate thriving plants at home.</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 dark:border-slate-700 pt-8 text-center text-gray-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} GrowingDragonFruit.com. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
