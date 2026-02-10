(() => {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("sidebarToggle");
  const closeBtn = document.getElementById("sidebarClose");

  const toggleSidebar = () => {
    sidebar.classList.toggle("open");
  };

  toggle?.addEventListener("click", toggleSidebar);
  closeBtn?.addEventListener("click", toggleSidebar);

  document.querySelectorAll(".sidebar-link").forEach(link => {
    link.addEventListener("click", () => sidebar.classList.remove("open"));
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") sidebar.classList.remove("open");
  });
})();


  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
