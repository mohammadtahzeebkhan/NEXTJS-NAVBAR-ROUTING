export default {
    async rewrites() {
      return [
        {
          source: '/profile.html',  // Custom URL with .html extension
          destination: '/profile', // Next.js route without .html
        },
      ];
    },
  };
  