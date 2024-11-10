function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  function handleScrollAnimation() {
    const scrollElements = document.querySelectorAll(".hidden-scroll");
    
    scrollElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("visible-scroll");
      }
    });
  }
  
  window.addEventListener("scroll", handleScrollAnimation);
  document.addEventListener("DOMContentLoaded", handleScrollAnimation);
  
function products() {
    window.location.href = 'product.html';
}