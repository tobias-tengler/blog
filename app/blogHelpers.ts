import path from "path";
import fs from "fs/promises";

const blogDirectory = path.join(process.cwd(), "blogs");

export async function getAllBlogSlugs() {
  const files = await fs.readdir(blogDirectory);

  const mdxFiles = files.map((file) => path.parse(file)).filter((file) => file.ext === ".mdx");

  return mdxFiles.map((file) => file.name);
}

export async function getBlogContent(slug: string) {
  const blogPath = path.join(blogDirectory, slug + ".mdx");
  const content = await fs.readFile(blogPath, "utf-8");

  return content;
}
