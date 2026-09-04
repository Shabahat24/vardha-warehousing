import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function DemoPaymentModal({ isOpen, onClose, quote }) {
  const [success, setSuccess] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <span className="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-[10px] tracking-wider rounded uppercase">
            DEMO PAYMENT — NO REAL CHARGE
          </span>
          <h3 className="text-xl font-black text-slate-900 mt-3">Reserve Space Advance</h3>
        </div>

        {!success ? (
          <div className="mt-6 space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Space:</span>
                <strong>{quote?.area || 2500} sq.ft</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Advance Token:</span>
                <strong className="text-amber-600 font-bold">₹10,000</strong>
              </div>
            </div>
            <button
              onClick={() => setSuccess(true)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition text-sm"
            >
              Confirm Mock Payment (₹10,000)
            </button>
          </div>
        ) : (
          <div className="mt-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-base font-bold text-slate-900">Token Payment Confirmed!</div>
            <button onClick={onClose} className="w-full bg-slate-100 text-slate-800 font-semibold py-2 rounded-xl text-xs">
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}