import Head from 'next/head';

const PrivacyPolicyPage = () => (
    <div className="animate-fade-in">
        <Head>
            <title>Privacy Policy - Growing Dragon Fruit</title>
            <meta
                name="description"
                content="Read the privacy policy for GrowingDragonFruit.com to understand how we collect, use, and protect your information."/>
            <meta property="og:title" content="Privacy Policy - Growing Dragon Fruit" />
            <meta
                property="og:description"
                content="Read the privacy policy for GrowingDragonFruit.com to understand how we collect, use, and protect your information."/>
        </Head>
        <header className="bg-green-50 dark:bg-slate-900 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Privacy Policy</h1>
            </div>
        </header>
        <div className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl leading-relaxed text-gray-800 dark:text-slate-200">
                <p>Your privacy is important to us. This policy explains what information we collect when you use GrowingDragonFruit.com, how we use it, and the choices you have about it.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Information We Collect</h2>
                <p>We collect information that you voluntarily provide, such as your email address when you contact us. We also gather anonymous data about how visitors use our site through analytics tools to help us improve our content.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">How We Use Information</h2>
                <p>Information is used to respond to inquiries, provide requested resources, and enhance our website. We do not sell or share your personal information with third parties except as required by law or when necessary to provide services.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Cookies</h2>
                <p>Cookies are small files stored on your device. We use cookies to understand site usage and improve the user experience. You can disable cookies in your browser settings, though some features may not function properly.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Data Security</h2>
                <p>We take reasonable measures to protect your information from unauthorized access. However, no method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>
                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">Your Choices</h2>
                <p>You may request that we delete personal information we hold about you. To exercise this right or ask questions about this policy, contact us at any time.</p>
                <p className="mt-16">This policy may be updated occasionally. Continued use of our site signifies acceptance of any changes.</p>
            </div>
        </div>
    </div>
);

export default PrivacyPolicyPage;
