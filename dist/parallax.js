(function () {
  function createParallaxStructure() {
    var parallaxEls = document.querySelectorAll(".parallax");
    for (var i = 0; i < parallaxEls.length; i++) {
      var el = parallaxEls[i];
      var speed = el.getAttribute("data-speed") || 0.3;
      var image = el.getAttribute("data-image");
      var height = el.getAttribute("data-height") || "100vh"; // default 100vh

      // Tambahkan wrapper container
      var container = document.createElement("div");
      container.className = "parallax-container";

      // Tambahkan layer background
      var layer = document.createElement("div");
      layer.className = "parallax-layer";
      layer.setAttribute("data-parallax-speed", speed);
      layer.style.backgroundImage = "url('" + image + "')";

      // Set tinggi parallax (opsional)
      el.style.height = height;

      // Pindahkan elemen asli ke dalam container
      el.parentNode.insertBefore(container, el);
      container.appendChild(layer);
      container.appendChild(el);
    }
  }

  function initParallaxScroll() {
    var layers = document.querySelectorAll("[data-parallax-speed]");
    window.addEventListener("scroll", function () {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var speed = parseFloat(layer.getAttribute("data-parallax-speed")) || 0;
        layer.style.transform = "translateY(" + scrollY * speed + "px)";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      createParallaxStructure();
      initParallaxScroll();
    });
  } else {
    createParallaxStructure();
    initParallaxScroll();
  }
})();
