import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: 'https://www.drsatyanarayanagarre.in/', priority: 1.0 },
    { url: 'https://www.drsatyanarayanagarre.in/about', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/services', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/contact', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/services/acute-kidney-injury', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/services/chronic-kidney-disease', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/services/kidney-stone', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/services/kidney-transplantation', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/services/dialysic-care', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/symptoms-of-kidney-stones', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/how-to-prevent-kidney-failure', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/how-diabetes-causes-kidney-failure', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/can-too-much-salt-cause-kidney-damage', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/understanding-chronic-kidney-disease', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/bun-complete-guide', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/cost-of-kidney-transplantation', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/perm-catheterization-for-dialysis', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/kidney-problems-diet-chart', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/creatinine-levels-before-and-after-dialysis', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/is-beer-good-for-kidney-stones', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/blogs/what-is-hematuria', priority: 0.8 },
    { url: 'https://www.drsatyanarayanagarre.in/services/hypertension-and-diabetes-kidney-problems', priority: 0.64 },
    { url: 'https://www.drsatyanarayanagarre.in/services/inherited-and-rare-kidney-disorders', priority: 0.64 },
    { url: 'https://www.drsatyanarayanagarre.in/services/interventional-nephrology-and-renal-imaging', priority: 0.64 },
    { url: 'https://www.drsatyanarayanagarre.in/services/preventive-kidney-health', priority: 0.64 },
    { url: 'https://www.drsatyanarayanagarre.in/services/perm_catheterization', priority: 0.64 },
  ]

  return pages.map(page => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.url === 'https://www.drsatyanarayanagarre.in/' ? 'yearly' : 'monthly',
    priority: page.priority,
  }))
}
