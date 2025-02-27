const SEO = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Babynama',
  url: 'https://babynama.com/',
  logo: 'https://babynama.com/assets/images/logo-new.webp',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+919540677121',
      contactType: 'customer service',
      availableLanguage: ['en', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+917948221222',
      contactType: 'emergency',
      availableLanguage: ['en', 'Hindi'],
    },
  ],
  sameAs: [
    'https://www.facebook.com/babynamahq/',
    'https://twitter.com/babynama',
    'https://www.instagram.com/babynamahq/',
  ],
};

export default SEO;
