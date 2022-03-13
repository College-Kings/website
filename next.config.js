const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});



module.exports = withBundleAnalyzer({
  compress: false,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 884],

  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],

    });
    return config;
  },
});
