import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'ASTERWebColab',
    template: '%s | ASTERWebColab',
  },
  description: 'Plataforma educacional para o ensino de Astronomia',
  keywords: ['astronomia', 'educação', 'física', 'ciência', 'aprendizagem'],
  authors: [{ name: 'ASTERWebColab Team' }],
  creator: 'ASTERWebColab',
  publisher: 'ASTERWebColab',
  metadataBase: new URL('https://asterwebcolab.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ASTERWebColab',
    title: 'ASTERWebColab',
    description: 'Plataforma educacional para o ensino de Astronomia',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ASTERWebColab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASTERWebColab',
    description: 'Plataforma educacional para o ensino de Astronomia',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-site-verification',
  },
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  path?: string
): Metadata {
  const fullUrl = `${defaultMetadata.metadataBase}${path || ''}`;
  const imageUrl = image || defaultMetadata.openGraph?.images?.[0].url;

  return {
    ...defaultMetadata,
    ...(title && {
      title,
      openGraph: {
        ...defaultMetadata.openGraph,
        title,
        url: fullUrl,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        ...defaultMetadata.twitter,
        title,
        images: [imageUrl],
      },
    }),
    ...(description && {
      description,
      openGraph: {
        ...defaultMetadata.openGraph,
        description,
      },
      twitter: {
        ...defaultMetadata.twitter,
        description,
      },
    }),
  };
} 