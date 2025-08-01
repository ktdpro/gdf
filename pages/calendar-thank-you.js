import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard } from '../components';

const ThankYouPage = () => (
    <div className="animate-fade-in text-center py-24 md:py-40 bg-gray-50 dark:bg-slate-900">
        <Head>
            <title>Thank You! | GrowingDragonFruit.com</title>
            <meta name="description" content="Thank you for downloading your free dragon fruit care calendar. Check your email inbox." />
            <meta property="og:title" content="Thank You! | GrowingDragonFruit.com" />
            <meta property="og:description" content="Thank you for downloading your free dragon fruit care calendar. Check your email inbox." />
            {/* Add more meta tags */}
        </Head>
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-800 dark:text-slate-200 mb-8">Your calendar is on its way. Please check your email inbox.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">While You Wait, Explore Our Guides:</h2>
            <div className="flex justify-center gap-4">
                <Link href="/how-to-grow" className="bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">
                    How to Grow Guide
                </Link>
                <Link href="/soil-guide" className="bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">
                    Soil Guide
                </Link>
            </div>
        </div>
    </div>
);

export default ThankYouPage;
