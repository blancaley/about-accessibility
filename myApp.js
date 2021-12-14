
document.addEventListener('DOMContentLoaded', () => {
  /* Toggle menu */
  const sidebar = document.querySelector("#sidebar");
  function toggle() {
    sidebar.classList.toggle("sidebar-open");
  }

  const menuButton = document.querySelector("#menuButton");
  menuButton.addEventListener("click", toggle);
});


