/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false, // Hides the "N" (Static Route) icon
    buildActivity: false, // Hides the compiling indicator
  },
};

export default nextConfig;