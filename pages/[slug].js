import { pageContent } from '../content/guideContent';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Keep useState for Accordion
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard, Breadcrumbs, NavDropdown, ComparisonTable } from '../components';
import React from 'react'; // Import React for JSX in AccordionItem

const PillarPage = ({ pageData }) => {
    const metaDescription = pageData.description || (pageData.content[0]?.paragraphs[0]?.substring(0, 150) + '...');
    return (
    <div className="animate-fade-in">
        <Head>
            <title>{`${pageData.title} | GrowingDragonFruit.com`}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={pageData.title} />
            <meta property="og:description" content={metaDescription} />
            {/* Add more meta tags like og:image, twitter:card, etc. */}
        </Head>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-green-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                {pageData.crumbs && <Breadcrumbs crumbs={pageData.crumbs} />}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white max-w-4xl">{pageData.title}</h1>
                {pageData.author && pageData.lastUpdated && (
                    <div className="mt-4 text-sm">
                        <span className="text-gray-600 dark:text-slate-400">By </span>
                        <Link href="/about" className="font-semibold text-pink-600 dark:text-pink-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">{pageData.author}</Link>
                        <span className="text-gray-600 dark:text-slate-400"> | Last Updated: {pageData.lastUpdated}</span>
                    </div>
                )}
            </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left side: Table of Contents & Sidebar Ad */}
                    {pageData.toc && pageData.toc.length > 0 && (
                        <aside className="lg:w-1/4 lg:sticky lg:top-24 self-start">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h3>
                            <ul className="space-y-2">
                                {pageData.toc.map((item, index) => (
                                    <li key={index}>
                                        <a href={`#section-${index}`} className="text-gray-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:font-semibold transition-all duration-200 block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    )}

                    {/* Right side: Article Content & In-Content Ad */}
                    <article className={`prose lg:prose-xl max-w-none text-gray-800 dark:text-slate-200 leading-relaxed ${pageData.toc && pageData.toc.length > 0 ? 'lg:w-3/4' : 'w-full'}`}>
                        {pageData.content.map((section, index) => (
                            <React.Fragment key={index}>
                                <div id={`section-${index}`} className="mb-12">
                                     {section.heading && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 pt-4 border-t-4 border-pink-400 dark:border-pink-500">{section.heading}</h2>}
                                    {section.paragraphs && section.paragraphs.map((p, pIndex) => (
                                        // Render paragraphs as plain text within <p> tags
                                        // We'll handle blockquotes and other HTML later with a structured approach
                                        <p key={pIndex} className="mb-4">{p}</p>
                                    ))}
                                    {section.table && <ComparisonTable headers={section.table.headers} rows={section.table.rows} />}
                                    {section.image && <ImageWithFade src={section.image} alt={section.heading} className="rounded-lg shadow-md my-8" />}
                                    {section.video && <VideoPlayer videoId={section.video.id} title={section.video.title} />}
                                    {section.gallery && (
                                        <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {section.gallery.map((img, imgIndex) => (
                                                <div key={imgIndex}>
                                                    <ImageWithFade src={img.src} alt={img.alt} className="rounded-lg shadow-md aspect-square object-cover" />
                                                    <p className="text-center text-sm mt-2 text-gray-600 dark:text-slate-400">{img.alt}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/* In-Content Ad Placement */}
                                {index === 1 && <AdPlaceholder type="in-content" />}
                            </React.Fragment>
                        ))}
                         {/* FAQ Accordion for FAQ page */}
                        {/* This section seems misplaced here as FAQ data is now in faq.js */}
                        {/* Leaving it for now but it might need to be removed or conditional */}
                        {pageData.faqs && pageData.faqs.length > 0 && (
                            <div className="border border-gray-200 dark:border-slate-700 rounded-lg mt-8">
                                {pageData.faqs.map((faq, index) => (
                                    <AccordionItem key={index} index={index} title={faq.q}>
                                        {faq.a}
                                    </AccordionItem>
                                ))}
                            </div>
                        )}
                    </article>
                     {/* Sidebar Ad outside of article for pages without TOC */}
                    {(!pageData.toc || pageData.toc.length === 0) && <aside className="lg:w-1/4 sticky top-24 self-start"><AdPlaceholder type="sidebar" /></aside>}
                </div>
            </div>
        </section>

        {/* From The Blog Section */}
        {pageData.blogLinks && pageData.blogLinks.length > 0 && (
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">From The Blog: Dive Deeper</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pageData.blogLinks.map(link => (
                            <div key={link.path} className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-green-900/40 transition-shadow duration-300 p-6 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{link.title}</h3>
                                <p className="text-gray-700 dark:text-slate-300 mb-4 flex-grow">{link.description}</p>
                                <Link href={link.path} className="mt-auto text-green-700 dark:text-green-400 font-bold hover:text-green-800 dark:hover:text-green-300 transition-colors duration-300 self-start rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">
                                    Read Article →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* CTA */}
        {pageData.cta && (
             <section className="bg-green-600 text-white py-16 md:py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">{pageData.cta.heading}</h2>
                    <p className="text-green-100 max-w-2xl mx-auto mb-8">{pageData.cta.subheading}</p>
                    <Link href="/free-calendar" className="bg-pink-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition-transform transform hover:scale-105 duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400">
                        {pageData.cta.buttonText}
                    </Link>
                </div>
            </section>
        )}

    </div>
    );
};

// Helper component for Accordion (moved from faq.js)
const AccordionItem = ({ index, title, children }) => {
    const [openIndex, setOpenIndex] = useState(null);
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
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = Object.keys(pageContent).map(slug => ({
        params: { slug: slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const pageData = pageContent[params.slug];
    return {
        props: {
            pageData,
        },
    };
}

export default PillarPage;
