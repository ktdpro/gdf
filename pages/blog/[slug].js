import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard, Breadcrumbs, NavDropdown, ComparisonTable } from '../../components';
import { blogPosts } from '../../content/blogContent';

const BlogPostPage = ({ postData }) => (
    <div className="animate-fade-in">
        <Head>
            <title>{`${postData.title} | GrowingDragonFruit.com`}</title>
            <meta name="description" content={postData.summary} />
            <meta property="og:title" content={postData.title} />
            <meta property="og:description" content={postData.summary} />
            <meta property="og:image" content={postData.featuredImage} />

        </Head>
        <header className="bg-green-50 dark:bg-slate-900 py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Breadcrumbs crumbs={[{label: 'Blog', path: '/blog'}, { label: postData.title }]} />
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">{postData.title}</h1>
                <p className="mt-4 text-gray-600 dark:text-slate-400">By <span className="font-semibold text-pink-600 dark:text-pink-400">{postData.author}</span> | Published on {postData.date}</p>
            </div>
        </header>
        <div className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl leading-relaxed text-gray-800 dark:text-slate-200">
                {postData.content.map((item, index) => {
                    if (item.type === 'paragraph') {
                        return (
                            <p key={index} className="mb-4">
                                {item.content.map((innerItem, innerIndex) => {
                                    if (innerItem.type === 'text') {
                                        return <React.Fragment key={innerIndex}>{innerItem.content}</React.Fragment>;
                                    } else if (innerItem.type === 'bold') {
                                        return <strong key={innerIndex}>{innerItem.content}</strong>;
                                    }
                                    return null; // Handle other inner types if needed
                                })}
                            </p>
                        );
                    }
                    return null; // Handle other top-level content types if needed (e.g., images, tables)
                })}
                <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Read the Full Guide</h3>
                    <p className="mt-2 text-gray-800 dark:text-slate-200">This article is part of our comprehensive pillar content. For even more detail, check out our full guide.</p>
                    <Link href={`/${postData.relatedPillar}`} className="mt-4 text-green-700 dark:text-green-400 font-bold hover:text-green-800 dark:hover:text-green-300 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                        Go to {postData.pillarTitle} →
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export async function getStaticPaths() {
    const paths = Object.keys(blogPosts).map(slug => ({
        params: { slug: slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = blogPosts[params.slug];
    return {
        props: {
            postData,
        },
    };
}

export default BlogPostPage;
