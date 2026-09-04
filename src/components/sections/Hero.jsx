import React from 'react';
import { Award, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero({ onCalculateClick, onFacilityClick }) {
  return (
    <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase">
              <Award className="w-4 h-4" /> Trusted Industrial Logistics in Gorakhpur
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Premium Warehouse Space in Gorakhpur
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Flexible warehousing and supply chain infrastructure for FMCG, E-commerce, Steel, Commercial Goods, and Distribution networks.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400">1987</div>
                <div className="text-xs text-slate-400 uppercase font-medium mt-1">Expertise Since</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">118 Ft.</div>
                <div className="text-xs text-slate-400 uppercase font-medium mt-1">Road Frontage</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">24×7</div>
                <div className="text-xs text-slate-400 uppercase font-medium mt-1">Truck Access</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onCalculateClick}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg transition inline-flex items-center gap-2"
              >
                <Calculator className="w-5 h-5" /> Calculate Space & Rates
              </button>
              <button
                onClick={onFacilityClick}
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-lg border border-slate-700 transition inline-flex items-center gap-2"
              >
                Explore Facility <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                <span>Facility Overview</span>
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-semibold">Immediate Possession</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Strategic Location:</strong> Gorakhnath Mandir Road, Bargadwa, Gorakhpur</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Wide Frontage:</strong> 36m / 118 ft front road for seamless 40ft trailer turning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Security:</strong> Full CCTV surveillance & on-site guard post</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Administrative Office:</strong> Ready on-premise operational support cabin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}