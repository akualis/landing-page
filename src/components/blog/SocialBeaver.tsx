// src/components/blog/SocialBeaver.tsx
import { FaInstagram, FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

// We pass the social data as a prop so the component stays "pure"
export default function SocialBeaver({ social }: { social: any }) {
  if (!social) return null;

  return (
    <div className="flex justify-center space-x-6 my-8 not-prose">
      {social.youtube && (
        <a href={social.youtube} target="_blank" className="social-links inline-flex text-3xl hover:text-red-600 transition-colors">
          <FaYoutube />
        </a>
      )}
      {social.x && (
        <a href={social.x} target="_blank" className="social-links inline-flex text-3xl hover:text-black transition-colors">
          <FaXTwitter />
        </a>
      )}
      {social.tiktok && (
        <a href={social.tiktok} target="_blank" className="social-links inline-flex text-3xl hover:text-pink-600 transition-colors">
          <FaTiktok />
        </a>
      )}
      {social.instagram && (
        <a href={social.instagram} target="_blank" className="social-links inline-flex text-3xl hover:text-purple-600 transition-colors">
          <FaInstagram />
        </a>
      )}
    </div>
  );
}