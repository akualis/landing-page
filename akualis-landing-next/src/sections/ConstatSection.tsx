'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import Image from "next/image";

export default function ConstatSection() {
  return (
    <section id="constat" className="w-full bg-white flex flex-col items-center text-center py-14 scroll-mt-14">
      {/* Mission */}
      <div className="flex flex-row pb-14 w-full">
        <div className="hidden md:block md:w-1/4" />
        <div className="w-full md:w-2/4 px-4">
          <p className="text-lg text-blue-700 font-semibold mb-2 subtitle">Notre mission</p>
          <h2 className="text-3xl font-bold mb-6">Simplifier et accompagner l’accès à l’eau potable</h2>
          <pre className="whitespace-pre-wrap text-left rounded p-4">
{`Alors que la nécessité de réduire l’utilisation de plastique se fait pressante et que les vagues de chaleur se multiplient, la localisation des points d’eau potable, en ville comme en milieu rural, est un enjeu majeur.

Akualis se donne pour mission d’identifier et de rendre accessible tous les points d’eau potable en les cartographiant, et de promouvoir une consommation raisonnée de cette précieuse ressource.

Akualis n'est pas seulement un outil de localisation; c'est une plateforme collaborative qui invite chacun à découvrir et partager des points d'eau encore inconnus ou à valider ceux déjà répertoriés. Ainsi, la base de données est enrichie en temps réel, offrant un accès fiable et actualisé aux sources d'eau potable.

L’application mobile, intuitive et ludique Akualis est plus qu'un simple outil; c'est une aventure où chaque utilisateur devient un explorateur de l'eau.

Ensemble, façonnons un monde où l'accès à l'eau potable est à portée de main de tous.`}
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
            alt="Photo constat n°1 - Localiser les points d’eau potable est un challenge permanent"
            width={1920} // Adjust as needed
            height={1080} // Adjust as needed
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 px-0 md:px-6 text-left">
          <p className="text-blue-700 font-semibold mb-2 px-2 md:px-4">Constat N°1</p>
          <h3 className="text-2xl font-bold mb-4 px-2 md:px-4">Localiser les points d’eau potable est un challenge permanent</h3>
          <pre className="whitespace-pre-wrap rounded p-4 mb-4">
{`Qui n’a jamais cherché de point d’eau potable pour remplir une gourde, un biberon ou simplement pour étancher sa soif ? Et qui a finalement acheté une bouteille d’eau en plastique, sans se douter qu’une fontaine se trouvait certainement à quelques mètres ?`}
          </pre>
          <Disclosure as="div" className="mb-4">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between py-2 px-2 md:px-4 rounded info font-medium mb-2">
                  <span>Plus d’informations...</span>
                  <FiChevronDown
                    className={`size-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''} text-blue group-data-hover:text-accent`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="bg-white rounded shadow p-4 info-panel">
                  <pre className="whitespace-pre-wrap ">
{`La localisation de la grande majorité des fontaines est pourtant une information publique, disponible notamment dans OpenstreetMap, et plusieurs acteurs se sont déjà attachés à la réalisation de cartes les répertoriant. Cependant, aucun n’a à ce jour réussi à répondre au triple défi d’offrir une couverture géographique à l’échelle nationale, de garantir l’exhaustivité des données, tout en permettant une mise à jour de l’information simple et en temps réel.

Avec Akualis nous répondrons à ces 3 enjeux grâce à notre app interactive et participative. Une approche gaming et des fonctionnalités avancées viendront renforcer la volonté de chacun à contribuer.`}
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
            alt="Photo constat n°2 - Réduire l’usage du plastique est une priorité"
            width={800} // Adjust as needed
            height={531} // Adjust as needed
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 px-0 md:px-6 text-left">
          <p className="text-blue-700 font-semibold mb-2 px-2 md:px-4">Constat N°2</p>
          <h3 className="text-2xl font-bold mb-4 px-2 md:px-4">Réduire l’usage du plastique est une priorité</h3>
          <pre className="whitespace-pre-wrap rounded p-4 mb-4">
{`Savez-vous que, tous les ans, 6,5 millions de tonnes de plastique sont déversées dans l’océan, et que les bouteilles en plastique font partie du top 10 des déchets récupérés sur les plages ?`}
          </pre>
          <Disclosure as="div" className="mb-4">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between py-2 px-2 md:px-4 rounded info font-medium mb-2">
                  <span>Plus d’informations...</span>
                  <FiChevronDown
                    className={`size-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''} text-blue group-data-hover:text-accent`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="bg-white rounded shadow p-4 info-panel">
                  <pre className="whitespace-pre-wrap ">
{`D’où viennent-elles ? En grande partie, de nos consommations terrestres. 9,3 milliards de litres d’eau en bouteille en plastique sont ainsi consommées par an en France alors que l’ensemble de la population a la chance d’avoir accès à de l’eau potable.

La France s’est d’ailleurs donnée pour objectif ambitieux de réduire de 50% le nombre de bouteilles en plastique à usage unique d’ici à 2030. Et Akualis souhaite contribuer à cette objectif en localisant un maximum de points d’eau pour permettre à chacun de trouver facilement un point d’eau pour remplir sa gourde.`}
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
            alt="Photo constat n°3 - L’accès à l’eau potable, un droit de l’homme universel"
            width={1572} // Adjust as needed
            height={1168} // Adjust as needed
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 px-0 md:px-6 text-left self-start">
          <p className="text-blue-700 font-semibold mb-2 px-2 md:px-4">Constat N°3</p>
          <h3 className="text-2xl font-bold mb-4 px-2 md:px-4">L’accès à l’eau potable, un droit de l’homme universel</h3>
          <pre className="whitespace-pre-wrap rounded p-4 mb-4">
{`Véritable enjeu de santé publique, l’OMS déclare que l’accès à l’eau potable est un droit de l’homme universel et demande aux Etats de faciliter l’accès à des fontaines publiques.`}
          </pre>
          <Disclosure as="div" className="mb-4">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between py-2 px-2 md:px-4 rounded info font-medium mb-2">
                  <span>Plus d’informations...</span>
                  <FiChevronDown
                    className={`size-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''} text-blue group-data-hover:text-accent`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="bg-white rounded shadow p-4 info-panel">
                  <pre className="whitespace-pre-wrap ">
{`En France, poussés par la loi AGEC, les collectivités et établissements accueillants du public sont ainsi engagés dans le déploiement accéléré de sources d’eau potable, mais elles sont bien souvent très peu visibles et donc peu utilisées.

Grâce à Akualis ces collectivités et organismes publics pourront informer plus efficacement les citoyens sur les ressources mises à leur disposition. Et les utilisateurs de l'application pourront remplir leur gourdes en ville, dans les gares, dans les centres commerciaux en toute confiance.`}
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
          <p className="text-lg text-blue-700 font-semibold mb-2 subtitle">EN CHIFFRES</p>
          <h2 className="text-3xl font-bold mb-6">L’enjeu d’une meilleure localisation des points d’eau</h2>
        </div>
        <div className="hidden md:block md:w-2/12" />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center">
        <div className="flex-1 text-center p-4">
          <p className="text-5xl font-bold text-blue-700 number--high">25 <span className="text-xl text-gray-700">millions</span></p>
          <p className=" text-gray-600 mt-2 number--text small">de bouteilles d’eau en plastique sont consommées par jour en France</p>
        </div>
        <div className="flex-1 text-center p-4">
          <p className="text-5xl font-bold text-blue-700 number--high">75 <span className="text-xl text-gray-700">%</span></p>
          <p className=" text-gray-600 mt-2 number--text small">des touristes achètent des bouteilles en plastique lors de leur séjour</p>
        </div>
        <div className="flex-1 text-center p-4">
          <p className="text-5xl font-bold text-blue-700 number--high">2 <span className="text-xl text-gray-700">litres</span></p>
          <p className=" text-gray-600 mt-2 number--text small">
            d’eau ainsi que 42 L de gaz, 100 ml de pétrole et 80 g de charbon sont nécessaires pour produire une bouteille en plastique d’1L
          </p>
        </div>
      </div>
    </section>
  );
}
