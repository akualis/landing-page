import Image from 'next/image';

export default function Banner({ t }: { t?: any }) {
  const title = t?.title;
  const subtitle = t?.subtitle;
  const logoAlt = t?.logoAlt;

  return (
    <section
      id="banner"
      className="w-full flex flex-col items-center text-center pb-8 p-2 md:px-0 bg-gradient-to-b from-white to-gray-50 pt-24"
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="flex-1"></div>
        <div className="flex-[2] flex flex-col items-center justify-center">
          <p className="subtitle mt-4">
            {subtitle}
          </p>
          <h1 className="text-3xl font-bold mt-6 h1">
            {title}
          </h1>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
}
