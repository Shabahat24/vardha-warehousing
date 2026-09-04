import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/pricing';

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
}