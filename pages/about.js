import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard } from '../components';

const AboutPage = () => (
    <div className="animate-fade-in">
         <Head>
            <title>About Us | GrowingDragonFruit.com</title>
            <meta name="description" content="Learn about our passion for dragon fruit and our mission to help you cultivate thriving plants at home." />
             <meta property="og:title" content="About Us | GrowingDragonFruit.com" />
            <meta property="og:description" content="Learn about our passion for dragon fruit and our mission to help you cultivate thriving plants at home." />
             {/* Add more meta tags */}
        </Head>
        <header className="bg-green-50 dark:bg-slate-900 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Passion for Pitaya</h1>
                <p className="mt-4 text-lg text-gray-800 dark:text-slate-300 max-w-3xl mx-auto">We believe anyone can experience the magic of growing their own exotic fruit.</p>
            </div>
        </header>
        <div className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl leading-relaxed text-gray-800 dark:text-slate-200">
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white">Our Mission: Your Dragon Fruit Success</h2>
                <p>GrowingDragonFruit.com was born from a simple weekend project that blossomed into a full-blown obsession. We were fascinated by this strange-looking, vibrant-tasting fruit and wanted to see if we could cultivate it ourselves. Our first attempts were... educational. We overwatered, we underwatered, we built a trellis that fell over, and we learned a mountain of lessons along the way. The journey was filled with trial, error, and immense satisfaction when we finally harvested that first, perfect, homegrown pitaya.</p>
                <p>We realized that while dragon fruit looks exotic and complex, it's a surprisingly resilient and rewarding plant for the home gardener—if you have the right information. That's why we created this site. Our mission is to share the practical, hands-on knowledge we've gathered and build a community of fellow enthusiasts. We aim to demystify the process, providing clear, science-backed advice that helps you avoid common pitfalls and achieve a bountiful harvest. Whether you have a sprawling garden or a small sunny balcony, we're here to guide you every step of the way.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Why We Chose Dragon Fruit</h2>
                <p>In a world of tomatoes and cucumbers, why dedicate a whole site to dragon fruit? Because we believe it's a special plant. It's a conversation starter, a piece of living architecture, and a producer of fruit that looks like a jewel and tastes like a tropical getaway. It connects us to a more exotic world of gardening and challenges us to learn new skills. We love its night-blooming flowers, which open for a single evening in a spectacular display. We love the thrill of seeing the first fruitlets form and watching them swell into vibrant pinks, reds, and yellows. This isn't just about gardening; it's about cultivating something truly extraordinary.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Meet the Grower</h2>
                <div className="flex flex-col sm:flex-row items-center gap-8 mt-8 bg-gray-50 dark:bg-slate-700 p-8 rounded-lg">
                    <ImageWithFade src="https://placehold.co/150x150/A7F3D0/14532D?text=Team+Photo+(150x150)" className="rounded-full w-32 h-32 object-cover" alt="Founder"/>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Growing Dragon Fruit Team</h3>
                        <p className="text-gray-800 dark:text-slate-200">Our team is a small group of passionate horticulturists, former engineers, and weekend gardeners who started with a single, sad-looking dragon fruit cutting and now manage a small urban orchard of over 15 different varieties. Our goal is to blend a data-driven, experimental approach with traditional gardening wisdom to find what truly works. We're the ones in the dirt every day, testing soil mixes, tweaking fertilizer ratios, and documenting every success and failure to share with you here.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;
