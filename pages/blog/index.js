import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';

const BlogIndexPage = ({ posts }) => (
    <div className="animate-fade-in">
        <Head>
            <title>Dragon Fruit Blog | GrowingDragonFruit.com</title>
            <meta name="description" content="Our latest tips, tricks, and stories from the world of dragon fruit cultivation." />
            <meta property="og:title" content="Dragon Fruit Blog | GrowingDragonFruit.com" />
            <meta property="og:description" content="Our latest tips, tricks, and stories from the world of dragon fruit cultivation." />
        </Head>
        <header className="bg-green-50 dark:bg-slate-900 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">From the Dragon's Den</h1>
                <p className="mt-4 text-lg text-gray-800 dark:text-slate-300 max-w-2xl mx-auto">
                    Our latest tips, tricks, and stories from the world of dragon fruit cultivation.
                </p>
            </div>
        </header>
        <div className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-12">
                    {posts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                            <div className="p-6 bg-gray-50 dark:bg-slate-900/50 rounded-lg border-l-4 border-pink-500 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
                                    By <span className="font-semibold text-pink-600 dark:text-pink-400">{post.author}</span> on {post.date}
                                </p>
                                <p className="text-gray-800 dark:text-slate-300 mb-6">{post.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        const slug = filename.replace(/\.md$/, '');
        return { slug, ...data };
    });

    // Optional: sort newest first
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
        props: {
            posts,
        },
    };
}

export default BlogIndexPage;
