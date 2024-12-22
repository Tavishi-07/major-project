document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion(event) {
    const item = event.currentTarget;
    const isExpanded = item.getAttribute('aria-expanded') === 'true';

    // Collapse all items
    items.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.style.maxHeight = '0';
      btn.nextElementSibling.style.opacity = '0';
    });

    // Expand the clicked item if it wasn't already expanded
    if (!isExpanded) {
      item.setAttribute('aria-expanded', 'true');
      item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
      item.nextElementSibling.style.opacity = '1';
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));
});


 
