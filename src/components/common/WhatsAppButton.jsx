import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/pricing';

export default function WhatsAppButton({ text = "WhatsApp Vardha", message = "", className = "" }) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition ${className}`}
    >
      <MessageSquare className="w-4 h-4" />
      <span>{text}</span>
    </a>
  );
}