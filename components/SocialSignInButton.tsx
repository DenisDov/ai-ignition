import { signIn } from "@/auth";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";

interface SocialSignInButtonProps {
  provider: string;
}

const SocialSignInButton = ({ provider }: SocialSignInButtonProps) => {
  let icon;

  switch (provider) {
    case "google":
      icon = <FaGoogle />;
      break;
    case "twitter":
      icon = <FaTwitter />;
      break;
    case "facebook":
      icon = <FaFacebook />;
      break;
    default:
      return null;
  }

  const handleSignIn = async () => {
    "use server";
    await signIn(provider);
  };

  return (
    <form action={handleSignIn}>
      <button className="flex items-center justify-center border-[#4C4D4F] border rounded-3xl p-3 w-full gap-2">
        {icon}
        <span>
          Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </span>
      </button>
    </form>
  );
};

export default SocialSignInButton;
