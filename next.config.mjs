const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/sarl-hebert",
        assetPrefix: "/sarl-hebert/",
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
