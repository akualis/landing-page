export async function getMdxComponent(lang: string, slug: string) {
  const { default: component } = await import(`../content/${slug}.${lang}.mdx`);
  return component;
}
