import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard } from '../components';

const ContactPage = () => (
    <div className="animate-fade-in">
        <Head>
            <title>Contact Us - Growing Dragon Fruit</title>
            <meta
                name="description"
                content="Have a question or feedback? Get in touch with the team at growingdragonfruit.com."
            />
            <meta property="og:title" content="Contact Us - Growing Dragon Fruit" />
            <meta
                property="og:description"
                content="Have a question or feedback? Get in touch with the team at growingdragonfruit.com."
            />
             {/* Add more meta tags */}
        </Head>
        <header className="bg-green-50 dark:bg-slate-900 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Get In Touch</h1>
                <p className="mt-4 text-lg text-gray-800 dark:text-slate-300 max-w-2xl mx-auto">We'd love to hear from you! Whether you have a question, feedback, or a success story to share, please reach out.</p>
            </div>
        </header>
        <div className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-600">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Name</label>
                                <input type="text" id="contact-name" className="w-full px-4 py-2 bg-white dark:bg-slate-600 border border-gray-300 dark:border-slate-500 rounded-lg text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Email</label>
                                <input type="email" id="contact-email" className="w-full px-4 py-2 bg-white dark:bg-slate-600 border border-gray-300 dark:border-slate-500 rounded-lg text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Subject</label>
                            <input type="text" id="contact-subject" className="w-full px-4 py-2 bg-white dark:bg-slate-600 border border-gray-300 dark:border-slate-500 rounded-lg text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Message</label>
                            <textarea id="contact-message" rows="5" className="w-full px-4 py-2 bg-white dark:bg-slate-600 border border-gray-300 dark:border-slate-500 rounded-lg text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        <div className="mt-6 text-center">
                            <button type="submit" className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;
