import React from 'react';
import { Truck, ShieldCheck, Building2 } from 'lucide-react';

export default function FacilitySpecs() {
  return (
    <section id="facility" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-amber-400 font-bold uppercase text-xs tracking-wider">Specs & Logistics</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Engineered for Rapid Commercial Logistics</h2>
          <p className="text-slate-400 mt-3">Built to handle intense 24×7 multi-axle freight movement with nil turnaround delays.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700">
            <Truck className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">118-Ft Wide Frontage</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Direct access onto Gorakhnath Mandir Road. Unobstructed turning radius for 40-ft trailers without traffic congestion.
            </p>
          </div>
          <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700">
            <ShieldCheck className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">High Security & CCTV</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              24×7 active surveillance cameras, gated barrier systems, and full floodlight perimeter coverage.
            </p>
          </div>
          <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700">
            <Building2 className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Operational Office Ready</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Equipped administrative cabins, high-speed internet provisioning, and rest facilities for transport staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}