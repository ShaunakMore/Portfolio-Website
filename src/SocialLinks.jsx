import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => (
  <div className="flex gap-4 mt-4">
    <a href="https://github.com/ShaunakMore" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-3xl hover:text-orange-500 transition-colors duration-300" />
    </a>
    <a href="https://linkedin.com/in/shaunak-more-37171a285" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-3xl hover:text-orange-500 transition-colors duration-300" />
    </a>
  </div>
);
export default SocialLinks;
