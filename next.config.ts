import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isCpanelStatic = process.env.CPANEL_STATIC === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages || isCpanelStatic ? "export" : undefined,
  // Vinext's prerender server renders at root; paths are prefixed after export.
  basePath: "",
  assetPrefix: undefined,
  trailingSlash: false,
};

export default nextConfig;
