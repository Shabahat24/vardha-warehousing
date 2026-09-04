import React, { useState, useMemo } from 'react';
import WhatsAppButton from '../common/WhatsAppButton';
import { calculatePricing } from '../../utils/pricing';

export default function SpaceCalculator({ onProceedToBooking }) {
  const [calcMethod, setCalcMethod] = useState('direct');
  const [directArea, setDirectArea] = useState(2500);
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(24);

  const calculatedArea = useMemo(() => {
    return calcMethod === 'direct' ? Number(directArea) || 0 : (Number(length) || 0) * (Number(width) || 0);
  }, [calcMethod, directArea, length, width]);

  const pricing = useMemo(() => calculatePricing(calculatedArea), [calculatedArea]);

  return (
    <section id="calculator" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-600 font-bold uppercase text-xs tracking-wider">Dynamic Cost Estimator</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Calculate Your Warehouse Requirement</h2>
          <p className="text-slate-600 mt-3">Live estimations with automated pricing slab validation.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex bg-slate-200 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setCalcMethod('direct')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition ${calcMethod === 'direct' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
              >
                Method 1: Direct Area (Sq.Ft.)
              </button>
              <button
                type="button"
                onClick={() => setCalcMethod('dimensions')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition ${calcMethod === 'dimensions' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
              >
                Method 2: Length × Width
              </button>
            </div>

            {calcMethod === 'direct' ? (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-700">Total Area Required (sq.ft)</label>
                <input
                  type="number"
                  value={directArea}
                  onChange={(e) => setDirectArea(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-lg font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
                <input
                  type="range"
                  min="500"
                  max="42000"
                  step="500"
                  value={directArea}
                  onChange={(e) => setDirectArea(e.target.value)}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Length (Feet)</label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Width (Feet)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="mt-6">
              <label className="block text-sm font-bold text-slate-700 mb-1">Clear Height (Feet)</label>
              <select
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="18">18 Feet</option>
                <option value="24">24 Feet</option>
                <option value="30">30 Feet</option>
              </select>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <h4 className="text-xs font-bold uppercase text-slate-500 mb-3">Official Slabs</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className={`p-3 rounded-lg border ${pricing.rate === 60 ? 'bg-amber-50 border-amber-400 font-bold' : 'bg-white border-slate-200'}`}>
                  <div className="text-slate-500">500 – 5,000 sq.ft</div>
                  <div className="text-base text-slate-900 mt-0.5">₹60 / sq.ft</div>
                </div>
                <div className={`p-3 rounded-lg border ${pricing.rate === 24 ? 'bg-amber-50 border-amber-400 font-bold' : 'bg-white border-slate-200'}`}>
                  <div className="text-slate-500">5,001 – 42,000 sq.ft</div>
                  <div className="text-base text-slate-900 mt-0.5">₹24 / sq.ft</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-amber-400 border-b border-slate-800 pb-3">Live Estimation</h3>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Total Space:</span>
                  <span className="text-lg font-bold">{calculatedArea.toLocaleString('en-IN')} sq.ft</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Ceiling Height:</span>
                  <span className="font-semibold">{height} Feet</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Applicable Rate:</span>
                  <span className="font-semibold">{pricing.status === 'VALID' ? `₹${pricing.rate} / sq.ft` : 'N/A'}</span>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-slate-400 text-xs uppercase font-medium">Estimated Monthly Amount</div>
                  {pricing.status === 'VALID' && (
                    <div className="text-3xl sm:text-4xl font-black text-amber-400 mt-1">
                      ₹{pricing.total.toLocaleString('en-IN')}
                      <span className="text-xs text-slate-400 font-normal"> / mo</span>
                    </div>
                  )}
                  {pricing.status === 'TOO_SMALL' && (
                    <div className="p-3 bg-red-950/50 border border-red-800 rounded-lg text-red-300 text-xs mt-2">
                      ⚠️ Minimum required area is 500 sq.ft.
                    </div>
                  )}
                  {pricing.status === 'TOO_LARGE' && (
                    <div className="p-3 bg-blue-950/50 border border-blue-800 rounded-lg text-blue-300 text-xs mt-2">
                      🏢 Requirements &gt; 42,000 sq.ft receive tailored enterprise quotes.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                disabled={pricing.status !== 'VALID'}
                onClick={() => onProceedToBooking({ area: calculatedArea, height, ...pricing })}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold py-3.5 rounded-xl transition"
              >
                Proceed to Book Space
              </button>
              <WhatsAppButton
                message={`Hi Vardha Warehousing, I would like to inquire about ${calculatedArea} sq.ft at ₹${pricing.rate}/sq.ft.`}
                className="w-full py-3 rounded-xl justify-center text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}