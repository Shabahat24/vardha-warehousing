import React from 'react';
import { CLIENTS } from '../../constants/data';

export default function TrustedClients() {
  return (
    <section id="clients" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Trusted By Leading Institutions & Brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {CLIENTS.map((client, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-300 transition shadow-sm">
              <div className="text-base font-extrabold text-slate-800">{client.name}</div>
              <div className="text-xs text-amber-600 font-medium mt-1">{client.sector}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}