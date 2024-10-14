document.addEventListener('DOMContentLoaded', () => {
    const tabContainers = document.querySelectorAll('.tabs');
  
    tabContainers.forEach(container => {
      const tabs = Array.from(container.querySelectorAll('.tab'));
      const contents = container.querySelectorAll('.tab__content');
  
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          const activeTab = container.querySelector('.tab_active');
          const activeContent = container.querySelector('.tab__content_active');
  
          if (activeTab) activeTab.classList.remove('tab_active');
          if (activeContent) activeContent.classList.remove('tab__content_active');
  
          tab.classList.add('tab_active');
          contents[index].classList.add('tab__content_active');
        });
      });
    });
  });
  
