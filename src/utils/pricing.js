export const calculatePricing = (area) => {
  const numericArea = Number(area) || 0;
  
  if (numericArea < 500) {
    return { area: numericArea, rate: 0, total: 0, status: 'TOO_SMALL' };
  }
  if (numericArea > 42000) {
    return { area: numericArea, rate: 0, total: 0, status: 'TOO_LARGE' };
  }

  // Rate slab applied to the ENTIRE selected area per specification
  const rate = numericArea <= 5000 ? 60 : 24;
  return {
    area: numericArea,
    rate,
    total: numericArea * rate,
    status: 'VALID'
  };
};

export const getWhatsAppUrl = (message = '') => {
  const phone = "919876543210";
  const defaultText = "Hello Vardha Warehousing, I would like to inquire about leasing warehouse space at your Gorakhpur facility.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message || defaultText)}`;
};