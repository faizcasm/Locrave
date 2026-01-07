import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export const SEOHead = ({
  title = 'Locrave - Your Local Community App',
  description = 'Your local community, connected. Find services, buy & sell locally, and connect with neighbors.',
  keywords = 'local community, neighborhood app, local services, buy sell locally, community connection',
  image = 'https://locrave.com/og-image.png',
  url = 'https://locrave.com',
  type = 'website',
  author = 'Locrave Team'
}: SEOHeadProps) => {
  const siteTitle = title.includes('Locrave') ? title : `${title} | Locrave`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Locrave" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Locrave',
          description: description,
          url: url,
          logo: image,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'support@locrave.com'
          },
          sameAs: [
            'https://www.facebook.com/locrave',
            'https://twitter.com/locrave',
            'https://www.instagram.com/locrave'
          ]
        })}
      </script>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Locrave',
          url: url,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>
    </Helmet>
  );
};
