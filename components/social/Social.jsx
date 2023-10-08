import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import personalData from "../../data/personalData";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: personalData.socialLinks.linkedin,
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
    {
      id: 2,
      link: personalData.socialLinks.facebook,
      icon: <FaFacebookF />,
      iconClass: "text-[#1773EA]",
    },
    {
      id: 3,
      link: personalData.socialLinks.telegram,
      icon: <FaTelegramPlane />,
      iconClass: "text-[#1C9CEA]",
    },
    {
      id: 4,
      link: personalData.socialLinks.github,
      icon: <FaGithub />,
      iconClass: "text-[#6c757d]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
