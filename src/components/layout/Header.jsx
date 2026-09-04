import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';

export default function Header({ onNavigate, activeSection = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Facility', id: 'facility' },
    { name: 'Solutions', id: 'use-cases' },
    { name: 'Calculator', id: 'calculator' },
    { name: 'Book Space', id: 'book' },
    { name: 'Clients', id: 'clients' },
    { name: 'FAQ', id: 'faq' }
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-700 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Positioning */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => handleLinkClick('home')}
        >
          <div className="bg-amber-500 text-slate-950 font-black text-xl w-11 h-11 rounded-xl flex items-center justify-center tracking-wider shadow-md group-hover:bg-amber-400 transition">
            VW
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight leading-none group-hover:text-amber-400 transition">
              VARDHA
            </span>
            <span className="text-[10px] sm:text-xs text-amber-400 font-semibold tracking-wider mt-1 uppercase">
              Expertise Since 1987
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-3 py-2 rounded-lg transition-all ${
                activeSection === link.id 
                  ? 'text-amber-400 font-bold bg-slate-900 shadow-inner' 
                  : 'hover:text-white hover:bg-slate-900/50'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop WhatsApp Action */}
        <div className="hidden sm:flex items-center space-x-3">
          <WhatsAppButton 
            text="WhatsApp Vardha" 
            className="px-4 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-emerald-600/20" 
          />
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <div className="flex items-center space-x-2 lg:hidden">
          <WhatsAppButton 
            text="Chat" 
            className="px-3 py-1.5 rounded-lg text-xs font-semibold sm:hidden" 
          />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-slate-600 text-xs">→</span>
            </button>
          ))}
          <div className="pt-4 px-2">
            <WhatsAppButton 
              text="WhatsApp Quick Inquiry" 
              className="w-full justify-center py-3 rounded-xl text-sm shadow-md" 
            />
          </div>
        </div>
      )}
    </header>
  );
}