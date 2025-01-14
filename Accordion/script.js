const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    
    const icon = header.querySelector(".icon");
    
    if (content.classList.contains("open")) {
      content.classList.remove("open");
      icon.textContent = "+";
    } else {
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.classList.remove("open");
        item.previousElementSibling.querySelector(".icon").textContent = "+";
      });

      content.classList.add("open");
      icon.textContent = "-";
    }
  });
});
