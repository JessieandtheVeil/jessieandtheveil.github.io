function hexToRgb(hex) {
  hex = hex.replace(/^#/, ""); // remove "#"
  if (hex.length === 3) {
    // e.g. #000 -> #000000
    hex = hex.split("").map(c => c + c).join("");
  }
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;  const banner = document.querySelector(".banner");
  const scrollY = window.scrollY;

  // how many pixels it takes to fully fade in
  const fadePoint = 200;
  const maxBannerOpacity = 1;

  // calculate opacity between 0 and 1
  let opacity = Math.min(scrollY / fadePoint, 1) * maxBannerOpacity;

  // get the --primary-band value from CSS
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryBandHex = rootStyles.getPropertyValue("--dark-navy-band").trim();

  // convert to rgb
  const { r, g, b } = hexToRgb(primaryBandHex);

  // apply with opacity
  banner.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;    

});
