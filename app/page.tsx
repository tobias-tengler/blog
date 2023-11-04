import { getAllBlogSlugs } from "./blogHelpers";
import Link from "next/link";

export default async function Home() {
  const slugs = await getAllBlogSlugs();

  return (
    <div className="p-4">
      Posts:
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={"/" + slug}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
