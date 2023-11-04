import { getAllBlogSlugs, getBlogContent } from "../blogHelpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import rehypeHighlight from "rehype-highlight";
import "./atom-one-dark-reasonable.css";

// TODO: Metadata from Frontmatter

const options = {
  mdxOptions: {
    rehypePlugins: [rehypeHighlight],
  },
} as const;

export async function generateStaticParams(): Promise<Props["params"][]> {
  const slugs = await getAllBlogSlugs();

  return slugs.map((slug) => ({ slug }));
}

type Props = {
  params: { slug: string };
};

export default async function BlogPage({ params }: Props) {
  const content = await getBlogContent(params.slug);

  return (
    <div>
      Blog page for {params.slug}:
      <div>
        <MDXRemote
          components={mdxComponents}
          source={content}
          // @ts-expect-error
          options={options}
        />
      </div>
    </div>
  );
}

// TODO: Use Tailwind and create custom components for these
const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h1 style={{ fontSize: "1.875em" }}>{children}</h1>,
  h2: ({ children }) => <h2 style={{ fontSize: "1.500em" }}>{children}</h2>,
  a: ({ href, children }) => (
    <a href={href} style={{ textDecorationLine: "underline", color: "#2563eb" }}>
      {children}
    </a>
  ),
  ul: ({ children }) => {
    return <ul>{children}</ul>;
  },
  ol: ({ children }) => {
    return <ol>{children}</ol>;
  },
};
