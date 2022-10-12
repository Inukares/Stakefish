export const getTradeVolume = (volumeNormalised, volume) => {
  if (volumeNormalised) return volumeNormalised;
  if (volume) return volume;
  return 'Unknown';
};
