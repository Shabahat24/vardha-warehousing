import React from 'react';
import WhatsAppButton from '../common/WhatsAppButton';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-black text-lg tracking-wider mb-2">VARDHA WAREHOUSING</div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Industrial storage, warehousing, logistics and custom warehouse development solutions. Serving businesses since 1987.
          </p>
        </div>
        <div>
          <div className="text-white font-bold mb-3">Facility Address</div>
          <p className="text-xs leading-relaxed">
            Gorakhnath Mandir Road, Bargadwa, Gorakhpur, Uttar Pradesh, India
          </p>
          <p className="text-xs text-amber-400 mt-2 font-medium">Frontage: 36m (118 ft) Main Arterial Road</p>
        </div>
        <div>
          <div className="text-white font-bold mb-3">Quick Inquiries</div>
          <WhatsAppButton className="px-4 py-2 rounded-lg text-xs" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-900 text-xs text-center text-slate-600">
        © 1987–2026 Vardha Warehousing. All rights reserved.
      </div>
    </footer>
  );
}