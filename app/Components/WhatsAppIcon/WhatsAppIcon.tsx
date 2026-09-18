import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const WhatsAppIcon = () => {
  return (
    <div className="fixed z-100 bottom-5 right-5 bg-green-500 w-13 h-13 flex justify-center items-center rounded-full animate-bounce">
      <Link
        href="https://wa.me/201141188639"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-8 text-white" />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
