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
                <p>Last Updated: August 3, 2025</p>
                <p>Welcome to GrowingDragonFruit.com. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">1. Terms</h2>
                <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on GrowingDragonFruit.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li>attempt to decompile or reverse engineer any software contained on GrowingDragonFruit.com's website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
                <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by GrowingDragonFruit.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">3. Disclaimer</h2>
                <p>The materials on GrowingDragonFruit.com's website are provided "as is". GrowingDragonFruit.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, GrowingDragonFruit.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet website or otherwise relating to such materials or on any sites linked to this site.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">4. Limitations</h2>
                <p>In no event shall GrowingDragonFruit.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on GrowingDragonFruit.com's Internet site, even if GrowingDragonFruit.com or a GrowingDragonFruit.com authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">5. Revisions and Errata</h2>
                <p>The materials appearing on GrowingDragonFruit.com's website could include technical, typographical, or photographic errors. GrowingDragonFruit.com does not warrant that any of the materials on its website are accurate, complete, or current. GrowingDragonFruit.com may make changes to the materials contained on its website at any time without notice. GrowingDragonFruit.com does not, however, make any commitment to update the materials.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">6. Links</h2>
                <p>GrowingDragonFruit.com has not reviewed all of the sites linked to its Internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GrowingDragonFruit.com of the site. Use of any such linked website is at the user's own risk.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">7. Site Terms of Use Modifications</h2>
                <p>GrowingDragonFruit.com may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">8. Governing Law</h2>
                <p>Any claim relating to GrowingDragonFruit.com's website shall be governed by the laws of the State of [Your State] without regard to its conflict of law provisions.</p>

                <h2 className="font-bold text-3xl text-gray-900 dark:text-white mt-16">9. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at: <a href="mailto:info@growingdragonfruit.com">info@growingdragonfruit.com</a></p>
            </div>
        </div>
    </div>
);

export default TermsOfServicePage;
