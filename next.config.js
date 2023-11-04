const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "export",
  experimental: {
    mdxRs: true,
  },
};

if (process.env.GITHUB_ACTIONS) {
  nextConfig.basePath = "/blog";
}

module.exports = withMDX(nextConfig);
