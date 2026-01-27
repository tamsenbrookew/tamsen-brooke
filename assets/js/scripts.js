(() => {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("sidebarToggle");
  const closeBtn = document.getElementById("sidebarClose");

  const open = () => sidebar.classList.add("open");
  const close = () => sidebar.classList.remove("open");

  openBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);

  // Close sidebar on link click
  document.querySelectorAll(".sidebar-link").forEach(link => {
    link.addEventListener("click", close);
  });

  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
