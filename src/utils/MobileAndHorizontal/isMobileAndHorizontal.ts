export const isMobileAndHorizontal = () => {
  const userAgent = window.navigator.userAgent;
  const mobileRegex = /Mobile|Android|iPhone|iPad|iPod|IEMobile/i;
  const horizontalRegex = /landscape/i;

  return mobileRegex.test(userAgent) && horizontalRegex.test(screen.orientation.type);
};
