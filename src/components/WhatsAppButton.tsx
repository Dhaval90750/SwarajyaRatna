import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/swarajyaratna"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="Join our WhatsApp Group"
    >
      <MessageCircle size={32} />
    </a>
  );
}
