import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/+6239968677"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center cursor-pointer"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    );
};

export default FloatingWhatsApp;
