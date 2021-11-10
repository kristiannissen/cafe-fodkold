const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: false,
        disable: process.env.NODE_ENV === "development"
    },
  images: {
    domains: ["via.placeholder.com"]
  }
})
