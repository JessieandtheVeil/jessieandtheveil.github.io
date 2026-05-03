function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map(c => c + c).join("");
  }
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function updateBannerFade() {
  const scrollY = window.scrollY;
  const banner = document.querySelector(".banner");
  const fadePoint = 200;
  const maxBannerOpacity = 1;
  
  let opacity = Math.min(scrollY / fadePoint, 1) * maxBannerOpacity;
  
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryBandHex = rootStyles.getPropertyValue("--dark-navy-band").trim();
  const { r, g, b } = hexToRgb(primaryBandHex);
  
  banner.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
}


window.addEventListener("scroll", updateBannerFade);
document.addEventListener("DOMContentLoaded", updateBannerFade);
document.addEventListener("visibilitychange", updateBannerFade);