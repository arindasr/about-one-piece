// load

window.onload = function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none"; // Menghilangkan elemen loader
};

const backToTopButton = document.getElementById("backToTop");

// back to top button
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// nav
document.querySelectorAll(".right ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    const check = document.getElementById("check");
    if (check) check.checked = false;
  });
});

