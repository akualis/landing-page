import AppPreviewCarousel from "@/components/AppPreviewCarousel";
// import PreviewCarousel from "@/components/PreviewCarousel";

export default function ConceptSection({ t }: { t?: any }) {
  // use translations from `t.concept`
  const subtitle = t?.concept?.subtitle;
  const title = t?.concept?.title;
  const appPreviews = t?.concept?.appPreviews ?? [];

  return (
    <section
      id="concept"
      className="w-full flex flex-col items-center text-center py-14 scroll-mt-14"
    >
      <div className="flex flex-col md:flex-row w-full justify-center">
        <div className="md:w-2/12" />
        <div className="w-full md:w-8/12">
          <p className="text-lg text-accent mb-2 subtitle">{subtitle}</p>
          <h2>
            {title}
          </h2>
        </div>
        <div className="md:w-2/12" />
      </div>

      <div className="py-4 md:py-12 w-full">
        <AppPreviewCarousel appPreviews={appPreviews} />
      </div>
    </section>
  );
}
