import React, { useState } from 'react';
import { CheckCircle2, CreditCard } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';

export default function BookingForm({ bookingQuote, onOpenDemoPayment }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    businessType: 'FMCG',
    gstNumber: '',
    startDate: '',
    duration: '12 Months',
    notes: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="book" className="py-16 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 text-white p-6 sm:p-8">
            <span className="text-amber-400 text-xs uppercase font-bold tracking-wider">Formal Space Reservation</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">Book Warehouse Space</h2>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-wrap justify-between items-center text-sm gap-2">
                <div>
                  <span className="text-slate-600 block text-xs">Allocated Area:</span>
                  <strong className="text-slate-900">{bookingQuote?.area || 2500} sq.ft ({bookingQuote?.height || 24} ft ht)</strong>
                </div>
                <div>
                  <span className="text-slate-600 block text-xs">Applicable Rate:</span>
                  <strong className="text-slate-900">₹{bookingQuote?.rate || 60} / sq.ft</strong>
                </div>
                <div>
                  <span className="text-slate-600 block text-xs">Estimated Monthly Total:</span>
                  <strong className="text-amber-700 text-base">₹{(bookingQuote?.total || 150000).toLocaleString('en-IN')}</strong>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Full Name *</label>
                  <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Company Name *</label>
                  <input required name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Business Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Business Type</label>
                  <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
                    <option>FMCG businesses</option>
                    <option>E-commerce and D2C businesses</option>
                    <option>Steel businesses</option>
                    <option>Industrial and commercial goods</option>
                    <option>Distribution and logistics businesses</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">GST Number (Optional)</label>
                  <input name="gstNumber" value={formData.gstNumber} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Required Start Date *</label>
                  <input required type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Duration</label>
                  <select name="duration" value={formData.duration} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
                    <option>6 Months</option>
                    <option>12 Months</option>
                    <option>24 Months</option>
                    <option>36+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Additional Requirements</label>
                <textarea rows={2} name="notes" value={formData.notes} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm"></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
                <button type="submit" className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition">
                  Submit Enquiry
                </button>
                <button
                  type="button"
                  onClick={onOpenDemoPayment}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" /> Demo Token Payment
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Requirement Submitted!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Our operations team at Gorakhpur will review the specification for <strong>{formData.companyName}</strong>.
              </p>
              <div className="flex justify-center gap-4">
                <WhatsAppButton
                  message={`Hi Vardha Warehousing, I have submitted an online requirement for ${formData.companyName} (${bookingQuote?.area || 2500} sq.ft).`}
                  className="px-6 py-3 rounded-xl"
                />
                <button onClick={() => setIsSubmitted(false)} className="bg-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-xl">
                  Back to Form
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}