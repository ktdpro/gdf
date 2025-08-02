import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard } from '../components';

const CalendarPage = () => (
    <div className="animate-fade-in">
        <Head>
            <title>Free Dragon Fruit Care Calendar | GrowingDragonFruit.com</title>
            <meta
                name="description"
                content="Download our free, printable month-by-month care calendar to ensure your dragon fruit gets exactly what it needs, when it needs it."
            />
            <meta property="og:title" content="Free Dragon Fruit Care Calendar | GrowingDragonFruit.com" />
            <meta
                property="og:description"
                content="Download our free, printable month-by-month care calendar to ensure your dragon fruit gets exactly what it needs, when it needs it."
            />
            {/* Add more meta tags */}
        </Head>
        <div className="bg-green-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side: Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Unlock Abundant Harvests</h1>
                        <h2 className="text-xl md:text-2xl text-gray-800 dark:text-slate-300 mb-8">Get Your Free Month-by-Month Dragon Fruit Care Calendar</h2>

                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What You'll Get in Your Free Calendar:</h3>
                            <ul className="space-y-3 text-gray-800 dark:text-slate-200">
                                <li className="flex items-center"><Icon name="calendar" className="w-6 h-6 text-green-500 mr-3"/><span>Detailed monthly watering schedules</span></li>
                                <li className="flex items-center"><Icon name="fertilizer" className="w-6 h-6 text-green-500 mr-3"/><span>Precise fertilizing guidelines for every growth stage</span></li>
                                <li className="flex items-center"><Icon name="plant" className="w-6 h-6 text-green-500 mr-3"/><span>Expert pruning techniques for bigger fruit</span></li>
                                <li className="flex items-center"><Icon name="varieties" className="w-6 h-6 text-green-500 mr-3"/><span>Tips on triggering blooms and ensuring pollination</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right side: Form */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Download Now!</h3>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your calendar is on its way.'); }}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">First Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Email Address</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <button type="submit" className="w-full bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-transform transform hover:scale-105 duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400">
                                Download Your Free Calendar!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CalendarPage;
