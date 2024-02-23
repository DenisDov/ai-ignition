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
    const userData = await signIn(provider);
    console.log("userData: ", userData);
  };

  return (
    <form action={handleSignIn}>
      <button className="flex w-full items-center justify-center gap-2 rounded-3xl border border-[#4C4D4F] p-3">
        {icon}
        <span>Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}</span>
      </button>
    </form>
  );
};

export default SocialSignInButton;
