import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard } from '../components';

const AboutPage = () => (
    <div className="animate-fade-in">
         <Head>
            <title>About Us - Growing Dragon Fruit</title>
            <meta
                name="description"
                content="Learn about the mission and passion behind growingdragonfruit.com, your go-to resource for cultivating pitaya at home."
            />
            <meta property="og:title" content="About Us - Growing Dragon Fruit" />
            <meta
                property="og:description"
                content="Learn about the mission and passion behind growingdragonfruit.com, your go-to resource for cultivating pitaya at home."
            />
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
            </div>
        </div>
    </div>
);

export default AboutPage;
