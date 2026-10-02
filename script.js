function toggleMenu() {
  const menu = document.getElementById("menu");

  menu.classList.toggle("active");
}

document.querySelectorAll("#menu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
  });
});
