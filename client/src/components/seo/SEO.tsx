import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    schema?: string; // JSON-LD string
}

export function SEO({
    title,
    description,
    canonicalUrl,
    ogImage = '/devnex-favicon.png', // Fallback to favicon/logo
    ogType = 'website',
    twitterCard = 'summary_large_image',
    schema
}: SEOProps) {
    const siteTitle = `${title} | DevNex`;
    const currentUrl = canonicalUrl || window.location.href;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="DevNex" />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {schema}
                </script>
            )}
        </Helmet>
    );
}
