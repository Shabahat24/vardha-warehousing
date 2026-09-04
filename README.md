# Vardha Warehousing — Commercial Discovery & Space Calculation Platform

A modern, responsive web application for commercial warehouse space discovery, area calculation, and booking inquiries at Gorakhnath Mandir Road, Bargadwa, Gorakhpur.

## Live Links
- **Live Demo:** [Paste your Vercel URL here]
- **Walkthrough Video:** [Paste your Loom / Drive / YouTube link here]

## Technology Choices
- **React (Vite):** Chosen for lightweight client-side state management, instantaneous recalculations, and rapid development cycles.
- **Tailwind CSS:** Provides modern styling, utility-first consistency, and seamless mobile responsiveness across all device breakpoints.
- **Lucide React:** Lightweight, clean vector icons for industrial specifications.

## Key Features Implemented
- **Dynamic Space Calculator:**
  - Method 1: Direct area input with interactive range slider.
  - Method 2: Length × Width dimension calculation.
  - Slabs: 500–5,000 sq.ft at ₹60/sq.ft; 5,001–42,000 sq.ft at ₹24/sq.ft applied to total area.
  - Clear height selection (18 ft, 24 ft, 30 ft).
  - Validation guards for <500 sq.ft and >42,000 sq.ft.
- **Enquiry & Booking Flow:** Full form fields, quotation preview, and dedicated submission confirmation view.
- **Demo Advance Payment Flow:** Client-side token payment simulation with card UI and confirmation state.
- **Omnipresent WhatsApp Contact:** Floating CTA, header trigger, and pre-formatted inquiry links carrying calculated space specs.

## Local Setup Instructions
```bash
npm install
npm run dev