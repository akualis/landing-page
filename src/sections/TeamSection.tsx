export default function TeamSection({ t }: { t?: any }) {
  const team = t?.team ?? t ?? {};
  const paragraphs: string[] = team.paragraphs ?? [];

  return (
    <section id="team" className="w-full flex flex-col items-center text-center py-14">
      <div className="flex flex-row mt-14 w-full">
        <div className="hidden md:block md:w-1/6" />
        <div className="w-full md:w-4/6 px-4">
          <p className="text-lg text-blue-700 font-semibold mb-2 subtitle">{team.subtitle}</p>
          <h2 className="text-3xl font-bold mb-6">{team.title}</h2>
          {paragraphs.map((p, i) => (
            <pre key={i} className="whitespace-pre-wrap text-left rounded p-4 text-base">
              {p}
            </pre>
          ))}
        </div>
        <div className="hidden md:block md:w-1/6" />
      </div>
    </section>
  );
}
