const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const span = document.querySelector(".location");
const target = document.querySelector("#target");

window.addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetWidth = targetRect.width;
  const targetHeight = targetRect.height;
  const moveTarget = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    target.style.transform = `translate(${x - targetWidth / 2}px, ${
      y - targetHeight / 2
    }px)`;
    horizontal.style.transform = `translate(0,${y}px)`;
    vertical.style.transform = `translate(${x}px, 0)`;
    span.textContent = `${x}px , ${y}px`;
    span.style.transform = `translate(${x}px,${y}px)`;
  };

  document.addEventListener("mousemove", moveTarget);
});
