import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard } from '../components';

const HomePage = () => (
    <div className="animate-fade-in">
        <Head>
            <title>Growing Dragon Fruit: Your Ultimate Guide to Pitaya Cultivation</title>
            <meta
                name="description"
                content="Learn how to grow dragon fruit at home with our comprehensive guides on planting, care, soil, fertilizing, trellising, varieties, and pest control."
            />
            <meta
                property="og:title"
                content="Growing Dragon Fruit: Your Ultimate Guide to Pitaya Cultivation"
            />
            <meta
                property="og:description"
                content="Learn how to grow dragon fruit at home with our comprehensive guides on planting, care, soil, fertilizing, trellising, varieties, and pest control."
            />
            <meta
                property="og:image"
                content="https://images.unsplash.com/photo-1593539138009-50811a2d677d?auto=format&fit=crop&w=1200&h=630&q=80"
            />
        </Head>

        {/* Hero Section */}
        <section className="relative text-center text-white py-24 md:py-40 px-4 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1593539138009-50811a2d677d?q=80&w=2940&auto=format&fit=crop')`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-shadow-md">Grow Dragon Fruit at Home</h1>
                <h2 className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto text-shadow">From Seeds to Sweet Harvests – Master Home-grown Pitaya</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/how-to-grow" className="bg-pink-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition-transform transform hover:scale-105 duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400">
                        Start Growing Now
                    </Link>
                    <Link href="/free-calendar" className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">
                        Get Your Free Care Calendar
                    </Link>
                </div>
            </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Grow Your Own Dragon Fruit?</h2>
                <p className="text-lg leading-relaxed text-gray-800 dark:text-slate-300 mb-8">
                    Growing dragon fruit isn’t just a hobby – it’s a chance to enjoy fresh, pesticide-free fruit and try varieties you’ll never see in stores. Home-grown pitaya also delivers high levels of vitamin C, fiber, magnesium and antioxidants. With <Link href="/soil-guide" className="font-bold text-green-600 dark:text-green-400 hover:underline">the right soil</Link>, sunlight and support, you’ll harvest fruit in 1–3 years when starting from a <Link href="/how-to-grow" className="font-bold text-green-600 dark:text-green-400 hover:underline">cutting</Link>.
                </p>
                <ImageWithFade src="https://images.unsplash.com/photo-1613149437142-4712a7638b93?q=80&w=2832&auto=format&fit=crop" alt="Collage of dragon fruit varieties" className="rounded-xl shadow-2xl mx-auto"/>
            </div>
        </section>

        {/* Pillar Content Overview */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Start Your Dragon Fruit Journey</h2>
                    <p className="text-lg leading-relaxed text-gray-800 dark:text-slate-300 max-w-3xl mx-auto">We’ve created step-by-step guides covering every stage of the process – from <Link href="/varieties" className="font-bold text-green-600 dark:text-green-400 hover:underline">choosing a self-fertile variety</Link> and <Link href="/soil-guide" className="font-bold text-green-600 dark:text-green-400 hover:underline">mixing the perfect soil</Link> to <Link href="/how-to-grow" className="font-bold text-green-600 dark:text-green-400 hover:underline">pruning</Link>, pollination and harvesting. Each guide is comprehensive yet easy to follow.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <InfoCard icon="plant" title="How to Grow Dragon Fruit" description="Learn everything from planting cuttings and seeds to pollination and harvesting." buttonText="Explore Guide" linkPath="/how-to-grow" />
                    <InfoCard icon="soil" title="Best Soil for Dragon Fruit" description="Discover the ideal soil mixes and amendments to create the perfect foundation." buttonText="Learn About Soil" linkPath="/soil-guide" />
                    <InfoCard icon="fertilizer" title="Fertilizing for Growth & Bloom" description="Understand NPK ratios, organic options, and feeding schedules for abundant harvests." buttonText="Fertilizing Tips" linkPath="/fertilizer" />
                    <InfoCard icon="trellis" title="Trellis & Structure Systems" description="Explore designs, DIY plans, and training techniques to support your climbing cactus." buttonText="Build Your Trellis" linkPath="/trellis-guide" />
                    <InfoCard icon="varieties" title="Dragon Fruit Varieties" description="Explore colors, flavors, and pollination needs to choose your perfect pitaya." buttonText="Discover Varieties" linkPath="/varieties" />
                    <InfoCard icon="pests" title="Pests & Diseases" description="Learn identification, prevention, and natural control methods to keep plants healthy." buttonText="Pest Solutions" linkPath="/pests" />
                </div>
            </div>
        </section>

        {/* Homepage Ad Placeholder */}
        <section className="bg-white dark:bg-slate-800 pb-8">
            <div className="container mx-auto px-4">
                <AdPlaceholder type="leaderboard" />
            </div>
        </section>

        {/* Lead Magnet Callout */}
        <section className="bg-green-50 dark:bg-green-900/20 py-16 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get Your Free Dragon Fruit Care Calendar</h2>
                    <p className="text-lg leading-relaxed text-gray-800 dark:text-slate-300 mb-6">Never miss an important task. Download our month-by-month checklist that covers watering, fertilizing and pruning for every season. Print it or save it to your phone.</p>
                    <Link href="/free-calendar" className="bg-pink-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition-transform transform hover:scale-105 duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400">
                        Download Your Free Calendar
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <ImageWithFade src="https://placehold.co/600x400/E9D5FF/3730A3?text=Calendar+Mockup+(600x400)" alt="Mockup of the free care calendar" className="rounded-xl shadow-2xl w-full"/>
                </div>
            </div>
        </section>

        {/* About Us Teaser */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">A Community of Pitaya Enthusiasts</h2>
                <p className="text-lg leading-relaxed text-gray-800 dark:text-slate-300 mb-8">
                    We’re hobby gardeners turned dragon fruit fanatics. After trial and error with <Link href="/blog/5-signs-of-overwatering" className="font-bold text-green-600 dark:text-green-400 hover:underline">overwatering</Link>, failed trellises and slow-growing seedlings, we documented what works. Now we share research-backed guidance so you can avoid the mistakes and enjoy a <Link href="/how-to-grow" className="font-bold text-green-600 dark:text-green-400 hover:underline">thriving plant</Link>.
                </p>
                <Link href="/about" className="text-green-700 dark:text-green-400 font-bold hover:text-green-800 dark:hover:text-green-300 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded px-2">
                    Learn More About Us →
                </Link>
            </div>
        </section>
    </div>
);

export default HomePage;
