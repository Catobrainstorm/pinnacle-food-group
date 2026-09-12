import { useEffect } from "react";

/**
 * Sets document.title for the current page. Every page should call this
 * with a specific, human-readable title — search engines and browser
 * tabs/bookmarks both use it, and a unique title per page (instead of one
 * generic site-wide title) meaningfully helps SEO.
 */
export function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title
      ? `${title} | Pinnacle Food Group`
      : "Pinnacle Food Group";
    return () => {
      document.title = previous;
    };
  }, [title]);
}
