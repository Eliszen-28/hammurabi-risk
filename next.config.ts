import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  // Vinext's prerender server renders at root; paths are prefixed after export.
  basePath: "",
  assetPrefix: isGitHubPages ? "/hammurabi-risk/" : undefined,
  trailingSlash: false,
};

export default nextConfig;
