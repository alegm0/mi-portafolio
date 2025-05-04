export default function scrollToLastShoot() {
  const lastShoot = document.querySelector("#portafolio-gallery > a:last-child");
  if (lastShoot) {
    const offset = 15;
    const shootBottom = lastShoot.getBoundingClientRect().bottom + window.scrollY;
    const scrollPosition = shootBottom - window.innerHeight + offset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }
}
