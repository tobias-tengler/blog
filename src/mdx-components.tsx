import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 style={{ fontSize: "1.875em" }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: "1.500em" }}>{children}</h2>,
    a: ({ href, children }) => (
      <a href={href} style={{ textDecorationLine: "underline", color: "#2563eb" }}>
        {children}
      </a>
    ),
    img: ({ src, alt }) => {
      return <img src={src} alt={alt} />;
    },
    ul: ({ children }) => {
      return <ul>{children}</ul>;
    },
    ol: ({ children }) => {
      return <ol>{children}</ol>;
    },
  };
}
