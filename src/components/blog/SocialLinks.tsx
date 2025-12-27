import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";

export default function SocialLinks({ social }: { social: any }) {
  if (!social) return null;

  return (
    <div className="flex justify-center space-x-6 my-8 not-prose">
      {social.linkedin && (
        <a 
          href={social.linkedin} 
          aria-label="LinkedIn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-links inline-flex text-3xl hover:text-blue-700 transition-colors"
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
          className="social-links inline-flex text-3xl hover:text-blue-600 transition-colors"
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
          className="social-links inline-flex text-3xl hover:text-pink-600 transition-colors"
        >
          <FaInstagram />
        </a>
      )}
    </div>
  );
}
