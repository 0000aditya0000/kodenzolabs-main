import { useEffect } from "react";

/**
 * Lightweight SEO hook — sets title + meta tags + canonical + JSON-LD per page.
 */
export function useSEO({ title, description, keywords, canonical, ogImage, jsonLd } = {}) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, attr = "name") => {
      if (!content) return;
      let el = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    if (ogImage) setMeta("og:image", ogImage, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    if (canonical) {
      let link = document.head.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    let jsonLdEl = document.head.querySelector("script[data-seo-jsonld='page']");
    if (jsonLd) {
      if (!jsonLdEl) {
        jsonLdEl = document.createElement("script");
        jsonLdEl.setAttribute("type", "application/ld+json");
        jsonLdEl.setAttribute("data-seo-jsonld", "page");
        document.head.appendChild(jsonLdEl);
      }
      jsonLdEl.textContent = JSON.stringify(jsonLd);
    } else if (jsonLdEl) {
      jsonLdEl.remove();
    }
  }, [title, description, keywords, canonical, ogImage, jsonLd]);
}
