export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap() {
  const routes = ['/', '/projects', '/journey', '/retros', '/guestroom'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.7,
  }));

  const sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 1,
    },
  ];

  return sitemap.concat(routes);
}
