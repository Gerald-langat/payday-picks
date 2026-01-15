import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+254711871225";
  const message = encodeURIComponent(
    "Hi! I'm interested in Payday Picks VIP betting tips. Please tell me more!"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden sm:inline group-hover:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
