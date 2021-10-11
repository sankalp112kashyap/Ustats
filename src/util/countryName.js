export const getCountryName = (cc) => {
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  if (typeof cc === 'string') return regionNames.of(cc);
  return cc;
};
