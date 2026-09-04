import React from 'react';
import { FAQS } from '../../constants/data';

export default function FAQ() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-base">{faq.q}</h4>
              <p className="text-slate-600 text-sm mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}