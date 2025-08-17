import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function FooterSection({ t }: { t?: any }) {
  const f = t?.footer ?? t ?? {};
  const social = f.social ?? {};

  return (
    <footer className="text-grey py-4 md:py-8 px-12 text-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-1">
        <div className="w-full md:w-1/3 mb-2 md:mb-0">
          <a
            href={f.email ? `mailto:${f.email}` : undefined}
            title={f.emailTitle}
            className="underline text-inherit"
          >
            {f.email}
          </a>
        </div>
        <div className="w-full md:w-1/3 mb-2 md:mb-0 flex justify-center space-x-4">
          {social.linkedin && (
            <a
              href={social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links inline-flex"
            >
              <FaLinkedin />
            </a>
          )}
          {social.facebook && (
            <a
              href={social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links inline-flex"
            >
              <FaFacebook />
            </a>
          )}
          {social.instagram && (
            <a
              href={social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links inline-flex"
            >
              <FaInstagram />
            </a>
          )}
        </div>
        <div className="w-full md:w-1/3">
          {f.copyright}
        </div>
      </div>
    </footer>
  )
}
