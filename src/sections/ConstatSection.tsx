'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import Image from "next/image";

export default function ConstatSection({ t }: { t?: any }) {
  // accept either the full i18n object (t.constat) or the constat object directly (t)
  const c = t?.constat ?? t ?? {};

  return (
    <section id="constat" className="w-full bg-white flex flex-col items-center text-center py-14 scroll-mt-14">
      {/* Mission */}
      <div className="flex flex-row pb-14 w-full">
        <div className="hidden md:block md:w-1/4" />
        <div className="w-full md:w-2/4 px-4">
          <p className="text-lg text-blue-700 font-semibold mb-2 subtitle">{c.missionTitle}</p>
          <h2 className="text-3xl font-bold mb-6">{c.missionSubtitle}</h2>
          <pre className="whitespace-pre-wrap text-left rounded p-4">
            {c.missionParagraph}
          </pre>
        </div>
        <div className="hidden md:block md:w-1/4" />
      </div>

      {/* Constat 1 */}
      <div className="flex flex-col md:flex-row justify-center w-full px-2 md:px-4 py-4 mb-8 gap-4">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <Image
            className="w-full max-w-xs md:max-w-full rounded shadow object-cover"
            src="/img/akualis-fountain-girl.webp"
            alt={c.constat1ImageAlt}
            width={1920}
            height={1080}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 px-0 md:px-6 text-left">
          <p className="text-blue-700 font-semibold mb-2 px-4">{c.constat1Label}</p>
          <h3 className="text-2xl font-bold mb-4 px-4">{c.constat1Title}</h3>
          <pre className="whitespace-pre-wrap rounded p-4 mb-4">
            {c.constat1Text}
          </pre>
          <Disclosure as="div" className="mb-4">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between py-2 px-4 rounded info font-medium mb-2">
                  <span>{c.moreInformation}</span>
                  <FiChevronDown
                    className={`size-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''} text-blue group-data-hover:text-accent`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="bg-white rounded shadow p-4 info-panel">
                  <pre className="whitespace-pre-wrap ">
                    {c.constat1Disclosure}
                  </pre>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      {/* Constat 2 */}
      <div className="flex flex-col md:flex-row-reverse justify-center w-full px-2 md:px-4 py-4 mb-8 gap-4">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <Image
            className="w-full max-w-xs md:max-w-full rounded shadow object-cover"
            src="/img/akualis-no-plastic-ocean.webp"
            alt={c.constat2ImageAlt}
            width={800}
            height={531}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 px-0 md:px-6 text-left">
          <p className="text-blue-700 font-semibold mb-2 px-4">{c.constat2Label}</p>
          <h3 className="text-2xl font-bold mb-4 px-4">{c.constat2Title}</h3>
          <pre className="whitespace-pre-wrap rounded p-4 mb-4">
            {c.constat2Text}
          </pre>
          <Disclosure as="div" className="mb-4">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between py-2 px-4 rounded info font-medium mb-2">
                  <span>{c.moreInformation}</span>
                  <FiChevronDown
                    className={`size-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''} text-blue group-data-hover:text-accent`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="bg-white rounded shadow p-4 info-panel">
                  <pre className="whitespace-pre-wrap ">
                    {c.constat2Disclosure}
                  </pre>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      {/* Constat 3 */}
      <div className="flex flex-col md:flex-row justify-center w-full px-2 md:px-4 py-4 mb-8 gap-4">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <Image
            className="w-full max-w-xs md:max-w-full rounded shadow object-cover"
            src="/img/akualis-carte-interactive.webp"
            alt={c.constat3ImageAlt}
            width={1572}
            height={1168}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 px-0 md:px-6 text-left self-start">
          <p className="text-blue-700 font-semibold mb-2 px-4">{c.constat3Label}</p>
          <h3 className="text-2xl font-bold mb-4 px-4">{c.constat3Title}</h3>
          <pre className="whitespace-pre-wrap rounded p-4 mb-4">
            {c.constat3Text}
          </pre>
          <Disclosure as="div" className="mb-4">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between py-2 px-4 rounded info font-medium mb-2">
                  <span>{c.moreInformation}</span>
                  <FiChevronDown
                    className={`size-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''} text-blue group-data-hover:text-accent`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="bg-white rounded shadow p-4 info-panel">
                  <pre className="whitespace-pre-wrap ">
                    {c.constat3Disclosure}
                  </pre>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      {/* Numbers */}
      <div className="flex flex-row py-14 w-full">
        <div className="hidden md:block md:w-2/12" />
        <div className="w-full md:w-8/12 px-4">
          <p className="text-lg text-blue-700 font-semibold mb-2 subtitle">{c.numbersSectionTitle}</p>
          <h2 className="text-3xl font-bold mb-6">{c.numbersSectionSubtitle}</h2>
        </div>
        <div className="hidden md:block md:w-2/12" />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center">
        <div className="flex-1 text-center p-4">
          <p className="text-5xl font-bold text-blue-700 number--high">{c.number1Value} <span className="text-xl text-gray-700">{c.number1Unit}</span></p>
          <p className=" text-gray-600 mt-2 number--text small">{c.number1Text}</p>
        </div>
        <div className="flex-1 text-center p-4">
          <p className="text-5xl font-bold text-blue-700 number--high">{c.number2Value} <span className="text-xl text-gray-700">{c.number2Unit}</span></p>
          <p className=" text-gray-600 mt-2 number--text small">{c.number2Text}</p>
        </div>
        <div className="flex-1 text-center p-4">
          <p className="text-5xl font-bold text-blue-700 number--high">{c.number3Value} <span className="text-xl text-gray-700">{c.number3Unit}</span></p>
          <p className=" text-gray-600 mt-2 number--text small">
            {c.number3Text}
          </p>
        </div>
      </div>
    </section>
  );
}
