document.addEventListener('DOMContentLoaded', function () {
    const submenuTriggers = document.querySelectorAll('.submenu-trigger');

    submenuTriggers.forEach(trigger => {
      trigger.addEventListener('click', function () {
        const subItemsList = this.closest('.menu-item').querySelector('.sub-items-list');
        const itemIcon = this.querySelector('.item-icon');

        // Toggle the expanded class for transition
        subItemsList.classList.toggle('expanded');
        
        // Toggle the flip class for rotating the item-icon
        this.classList.toggle('flip');
        if (subItemsList.classList.contains('expanded')) {
            const contentHeight = subItemsList.scrollHeight;
            subItemsList.style.maxHeight = contentHeight + 'px';
          } else {
            subItemsList.style.maxHeight = null; // Reset to default value
          }
      });
    });
  });