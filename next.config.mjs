/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  // GitHub Pages serves project sites under /<repo-name>
  basePath: isGithubPages ? "/goldstartech" : "",
  assetPrefix: isGithubPages ? "/goldstartech/" : "",
};
export default nextConfig;
