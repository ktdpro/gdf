import Head from 'next/head';

const TermsOfServicePage = () => (
    <div className="animate-fade-in">
        <Head>
            <title>Terms of Service - Growing Dragon Fruit</title>
            <meta
                name="description"
                content="Review the terms and conditions for using GrowingDragonFruit.com."/>
            <meta property="og:title" content="Terms of Service - Growing Dragon Fruit" />
            <meta
                property="og:description"
                content="Review the terms and conditions for using GrowingDragonFruit.com."/>
        </Head>
        <header className="bg-green-50 dark:bg-slate-900 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Terms of Service</h1>
            </div>
        </header>
        <div className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl leading-relaxed text-gray-800 dark:text-slate-200">
                <p>By accessing or using GrowingDragonFruit.com, you agree to these terms. If you do not agree, please discontinue use of the site.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Use of Content</h2>
                <p>The content on this website is for informational purposes only. You may use the information for personal, non-commercial use. Reproduction, distribution, or modification without permission is prohibited.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">No Warranties</h2>
                <p>All information is provided "as is" without warranties of any kind. We do not guarantee accuracy, completeness, or suitability for any purpose.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Limitation of Liability</h2>
                <p>GrowingDragonFruit.com and its authors are not liable for any damages or losses resulting from the use of the site or reliance on its content.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">External Links</h2>
                <p>This site may contain links to third-party websites. We are not responsible for the content or practices of those sites and provide these links for convenience only.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Changes to These Terms</h2>
                <p>We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.</p>
                <p className="mt-16">If you have questions about these terms, please contact us.</p>
            </div>
        </div>
    </div>
);

export default TermsOfServicePage;
