import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, ImageWithFade, AdPlaceholder } from '../../components/index.js';
import { blogPosts } from '../../content/blogContent';

const BlogIndexPage = ({ posts }) => (
    <div className="animate-fade-in">
        <Head>
            <title>Dragon Fruit Blog | GrowingDragonFruit.com</title>
            <meta name="description" content="Our latest tips, tricks, and stories from the world of dragon fruit cultivation." />
            <meta property="og:title" content="Dragon Fruit Blog | GrowingDragonFruit.com" />
            <meta property="og:description" content="Our latest tips, tricks, and stories from the world of dragon fruit cultivation." />
            {/* Add more meta tags */}
        </Head>
        <header className="bg-green-50 dark:bg-slate-900 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">From the Dragon's Den</h1>
                <p className="mt-4 text-lg text-gray-800 dark:text-slate-300 max-w-2xl mx-auto">Our latest tips, tricks, and stories from the world of dragon fruit cultivation.</p>
            </div>
        </header>
        <div className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-12">
                    {Object.entries(posts).map(([slug, post]) => (
                        <Link key={slug} href={`/blog/${slug}`} className="block"> {/* Wrapped with Link */}
                            <div className="p-6 bg-gray-50 dark:bg-slate-900/50 rounded-lg border-l-4 border-pink-500 cursor-pointer hover:shadow-lg transition-shadow duration-300"> {/* Added cursor and hover effect */}
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">By <span className="font-semibold text-pink-600 dark:text-pink-400">{post.author}</span> on {post.date}</p>
                                <p className="text-gray-800 dark:text-slate-300 mb-6">{post.summary}</p>
                                {/* Removed the individual "Read More" link here */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export async function getStaticProps() {
    return {
        props: {
            posts: blogPosts,
        },
    };
}

export default BlogIndexPage;
