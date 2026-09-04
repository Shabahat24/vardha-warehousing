import React from 'react';
import { ShoppingCart, Package, Layers, Factory, Network } from 'lucide-react';

const cases = [
  { title: "FMCG & Consumer Goods", desc: "Fast intake and high-throughput dispatch docks with pest-controlled storage floors.", icon: ShoppingCart },
  { title: "E-Commerce & D2C Hubs", desc: "Multi-tier rack configurations designed for rapid SKU picking, sorting, and daily parcel dispatch.", icon: Package },
  { title: "Steel & Heavy Industrial", desc: "Reinforced flooring built for extreme point-loads, heavy raw metals, and flatbed trailer unloads.", icon: Layers },
  { title: "Distribution Networks", desc: "Regional transshipment node positioned with 118-ft highway frontage for rapid cross-docking.", icon: Network },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-600 font-bold uppercase text-xs tracking-wider">Target Industries</span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">Tailored Warehouse Solutions</h2>
          <p className="text-slate-600 text-sm mt-2">Engineered to match the operational workflows of regional and national supply chains.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}