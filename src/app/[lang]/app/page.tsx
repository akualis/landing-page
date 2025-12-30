import { Metadata } from 'next';
import { getTranslations } from '@/utils/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const i18n = await getTranslations(lang as 'en' | 'fr');

  // Assuming you want similar metadata logic to the blog, 
  // but potentially with specific keys for the app page if they existed in i18n.
  // For now, I will use a generic title or fallback to the site title.
  // You might want to add specific 'app' keys to your i18n dictionaries later.
  const title = (i18n.metadata.titleTemplate ? i18n.metadata.titleTemplate.replace('%s', "App") : "Akualis");

  return {
    title: title,
    description: i18n.metadata.description, // Fallback to general description
    // Add other metadata fields as needed
  };
}

export default function App() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="https://water.akualis.com/"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Akualis App"
      />
    </div>
  );
}
