import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';
import Link from 'next/link';
import { Breadcrumbs } from '../../components';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export async function getStaticPaths() {
  const filenames = fs.readdirSync(BLOG_DIR);
  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, '') }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(BLOG_DIR, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const contentHtml = marked(content);

  return {
    props: {
      postData: data,
      contentHtml,
    },
  };
}

const BlogPostPage = ({ postData, contentHtml }) => (
  <div className="animate-fade-in">
    <Head>
      <title>{`${postData.title} | GrowingDragonFruit.com`}</title>
      <meta name="description" content={postData.summary} />
      <meta property="og:title" content={postData.title} />
      <meta property="og:description" content={postData.summary} />
      {postData.featuredImage && (
        <meta property="og:image" content={postData.featuredImage} />
      )}
    </Head>

    <header className="bg-green-50 dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs crumbs={[{ label: 'Blog', path: '/blog' }, { label: postData.title }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">{postData.title}</h1>
        <p className="mt-4 text-gray-600 dark:text-slate-400">
          By <span className="font-semibold text-pink-600 dark:text-pink-400">{postData.author}</span> | Published on {postData.date}
        </p>
      </div>
    </header>

    <div className="container mx-auto px-4 max-w-4xl pt-12 pb-20">
  <div className="prose prose-lg dark:prose-invert max-w-none pt-12 [&_p]:mb-6 [&_p]:leading-relaxed [&_ul]:mb-6 [&_ul]:leading-relaxed [&_h3]:mt-12 [&_blockquote]:mb-6">
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>

      {postData.relatedPillar && (
        <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Read the Full Guide</h3>
          <p className="mt-2 text-gray-800 dark:text-slate-200">
            This article is part of our comprehensive pillar content. For even more detail, check out our full guide.
          </p>
          <Link
            href={`/${postData.relatedPillar}`}
            className="mt-4 inline-block text-green-700 dark:text-green-400 font-bold hover:text-green-800 dark:hover:text-green-300 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Go to {postData.pillarTitle} →
          </Link>
        </div>
      )}
    </div>
  </div>
);

export default BlogPostPage;
