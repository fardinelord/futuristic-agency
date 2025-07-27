/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
};

module.exports = nextConfig;