import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

interface SocialSignInButtonProps {
  provider: string;
  onClick: () => void;
}

const SocialSignInButton = ({ provider, onClick }: SocialSignInButtonProps) => {
  let icon, bgColor;

  switch (provider) {
    case "google":
      icon = <FaGoogle />;
      bgColor = "#DB4437";
      break;
    case "twitter":
      icon = <FaTwitter />;
      bgColor = "#1DA1F2";
      break;
    case "facebook":
      icon = <FaFacebook />;
      bgColor = "#4267B2";
      break;
    default:
      return null;
  }

  return (
    <button
      className="social-signin-button"
      style={{ backgroundColor: bgColor }}
      onClick={() => onClick(provider)}
    >
      <div className="icon">{icon}</div>
      Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </button>
  );
};

export default SocialSignInButton;
