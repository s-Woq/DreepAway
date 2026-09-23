import { useEffect } from 'react';

function setMeta(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
  el.setAttribute('content', content);
}
function setProp(prop, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${prop}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
  el.setAttribute('content', content);
}
function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el); }
  el.setAttribute('href', href);
}

function clearAlternates() {
  document.querySelectorAll('link[rel="alternate"]').forEach((el) => el.remove());
}

export default function Seo({ title, description, canonical, image, keywords, faq, lang, alternates, noindex }) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('keywords', keywords);
    setLink('canonical', canonical);
    setProp('og:title', title);
    setProp('og:description', description);
    setProp('og:type', 'website');
    setProp('og:url', canonical);
    if (image) setProp('og:image', image);
    setProp('twitter:card', 'summary_large_image');
    setProp('twitter:title', title);
    setProp('twitter:description', description);

    if (lang) document.documentElement.setAttribute('lang', lang);

    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    clearAlternates();
    if (alternates && alternates.length) {
      alternates.forEach(({ lang: altLang, href }) => {
        const el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', altLang);
        el.setAttribute('href', href);
        document.head.appendChild(el);
      });
    }

    const existing = document.getElementById('faq-schema');
    if (existing) existing.remove();
    if (faq && faq.length) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'faq-schema';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(q => ({
          '@type': 'Question',
          name: q.q,
          acceptedAnswer: { '@type': 'Answer', text: q.a }
        }))
      });
      document.head.appendChild(script);
    }
  }, [title, description, canonical, image, keywords, faq, lang, alternates, noindex]);

  return null;
}