/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        // The Rust based compiler doesn't support plugins yet.
        mdxRs: false,
    },
};

if (process.env.GITHUB_ACTIONS) {
    nextConfig.basePath = "/blog";
}

const withMDX = require("@next/mdx")({
    options: {
        remarkPlugins: [require("remark-prism")],
    }
});
module.exports = withMDX(nextConfig);
