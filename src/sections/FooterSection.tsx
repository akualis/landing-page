import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function FooterSection() {
  const socialLinks: Record<string, string> = {
    facebook: 'https://www.facebook.com/profile.php?id=61573013273416',
    linkedin: 'https://www.linkedin.com/company/akualis',
    instagram: 'https://www.instagram.com/akualis_fountain/',
  };

  return (
    <footer className="text-grey py-4 md:py-8 px-12 text-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-1">
        <div className="w-full md:w-1/3 mb-2 md:mb-0">
          <a
            href="mailto:hello@akualis.com"
            title="Akualis App mail"
            className="underline text-inherit"
          >
            hello@akualis.com
          </a>
        </div>
        <div className="w-full md:w-1/3 mb-2 md:mb-0 flex justify-center space-x-4">
          <a
            href={socialLinks.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links inline-flex"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialLinks.facebook}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links inline-flex"
          >
            <FaFacebook />
          </a>
          <a
            href={socialLinks.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links inline-flex"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="w-full md:w-1/3">
          © 2025 Akualis App. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
