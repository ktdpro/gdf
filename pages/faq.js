import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Keep useState for Accordion
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard, Breadcrumbs, NavDropdown, ComparisonTable } from '../components';
// import { pageContent } from '../content/guideContent'; // No longer needed if data is here

// FAQs Data
const faqs = [
    {
        q: "How long until my dragon fruit produces fruit?",
        a: [
            { type: 'paragraph', content: "If you grow from a cutting, you can expect your first fruit in as little as 1-3 years. Growing from seed takes much longer, typically 5-7 years. Patience and proper care are key! For more details on growth timelines, see our full " },
            { type: 'link', text: 'How to Grow Guide', href: '/how-to-grow', className: "font-bold text-green-600 dark:text-green-400 hover:underline" },
            { type: 'paragraph', content: "." }
        ]
    },
    {
        q: "Why are my dragon fruit stems turning yellow?",
        a: [
            { type: 'paragraph', content: "Yellowing stems are most commonly a sign of overwatering, which can lead to root rot. It can also be a sign of a nutrient deficiency (especially nitrogen) or too much direct, intense sunlight (sunburn). We cover how to diagnose the exact cause in our " },
            { type: 'link', text: 'Pests & Diseases Guide', href: '/pests', className: "font-bold text-green-600 dark:text-green-400 hover:underline" },
            { type: 'paragraph', content: "." }
        ]
    },
    {
        q: "Do I need more than one plant to get fruit?",
        a: [
            { type: 'paragraph', content: "It depends on the variety! If you have a 'self-fertile' variety like American Beauty or Sugar Dragon, you only need one plant. If you have a 'self-sterile' variety like Physical Graffiti, you will need a different dragon fruit variety nearby for cross-pollination. Learn more in our " },
            { type: 'link', text: 'Varieties Guide', href: '/varieties', className: "font-bold text-green-600 dark:text-green-400 hover:underline" },
            { type: 'paragraph', content: "." }
        ]
    },
    {
        q: "What's the best kind of pot to use?",
        a: [
            { type: 'paragraph', content: "Choose a large pot, at least 15-20 gallons in size, with multiple large drainage holes. Terracotta is a great material as it is porous and helps the soil dry out, but any material will work as long as the drainage is excellent. Avoid pots without holes. Check our " },
            { type: 'link', text: 'Soil Guide', href: '/soil-guide', className: "font-bold text-green-600 dark:text-green-400 hover:underline" },
            { type: 'paragraph', content: " for more on container growing." }
        ]
    },
    {
        q: "Can I grow dragon fruit indoors?",
        a: [
            { type: 'paragraph', content: "Yes, you can, especially in colder climates! You will need to place it in the sunniest window you have (a south-facing window is ideal) and you may need to supplement with a grow light to ensure it gets the 6-8 hours of light it needs to thrive and potentially fruit. Read more in our " },
            { type: 'link', text: 'How to Grow Guide', href: '/how-to-grow', className: "font-bold text-green-600 dark:text-green-400 hover:underline" },
            { type: 'paragraph', content: "." }
        ]
    }
];

const FaqPage = ({ faqs }) => { // Use the faqs prop
    const [openIndex, setOpenIndex] = useState(null);

    const AccordionItem = ({ index, title, children }) => {
        const isOpen = index === openIndex;
        return (
            <div className="border-b border-gray-200 dark:border-slate-700">
                <h2>
                    <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        <span>{title}</span>
                        <svg
                            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </h2>
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className="p-6 text-gray-800 dark:text-slate-300 leading-relaxed">
                            {children.map((item, itemIndex) => {
                                if (item.type === 'paragraph') {
                                    return <p key={itemIndex}>{item.content}</p>;
                                } else if (item.type === 'link') {
                                    return <Link key={itemIndex} href={item.href} className={item.className}>{item.text}</Link>;
                                }
                                return null; // Handle other types if needed
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="animate-fade-in">
            <Head>
                <title>FAQs: Your Dragon Fruit Questions Answered</title>
                <meta
                    name="description"
                    content="Find quick answers to the most common questions about growing dragon fruit, from watering and fertilizing to pollination and troubleshooting."
                />
                <meta
                    property="og:title"
                    content="FAQs: Your Dragon Fruit Questions Answered"
                />
                <meta
                    property="og:description"
                    content="Find quick answers to the most common questions about growing dragon fruit, from watering and fertilizing to pollination and troubleshooting."
                />
                 {/* Add more meta tags */}
            </Head>
            <header className="bg-green-50 dark:bg-slate-900 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h1>
                    <p className="mt-4 text-lg text-gray-800 dark:text-slate-300 max-w-2xl mx-auto">Quick answers to your most common dragon fruit questions.</p>
                </div>
            </header>
            <div className="py-16 md:py-24 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="border border-gray-200 dark:border-slate-700 rounded-lg">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} index={index} title={faq.q}>
                                {faq.a}
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    // Since faqs are defined locally, no need to fetch from pageContent
    return {
        props: {
            faqs: faqs, // Pass the locally defined faqs array as a prop
        },
    };
}

export default FaqPage;
