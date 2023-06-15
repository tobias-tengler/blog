import { getAllBlogSlugs, getBlogContent } from "@/app/blogHelpers";
import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import "./prism-laserwave.css";

export async function generateStaticParams(): Promise<Props["params"][]> {
  const slugs = await getAllBlogSlugs();

  return slugs.map((slug) => ({ slug }));
}

type Props = {
  params: { slug: string };
};

export default async function BlogPage({ params }: Props) {
  const content = await getBlogContent(params.slug);
  const components = useMDXComponents({});

  return (
    <div>
      Blog page for {params.slug}:
      <div>
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [
                // todo: this doesn't work yet
                // require("remark-prism")
              ],
            },
          }}
        />
      </div>
    </div>
  );
}
