const sidebar = document.querySelector('.sidebar');
const sidebar_container = document.querySelector('.sidebar-container');
if (sidebar) {
  new Accordion(sidebar, '.sidebar-icons');

  let scrollables = document.querySelectorAll('.grid-middle-right > div');
  last_scroll = 0;

  Array.from(scrollables).forEach((elem) => {
    elem.addEventListener('scroll', function (event) {
      if (sidebar_container.scrollHeight > sidebar_container.offsetHeight) {
        let scroll_top = event.target.scrollTop;
        let scroll_dist = scroll_top - last_scroll;
        sidebar_container.scrollBy(0, scroll_dist);
        last_scroll = scroll_top;
      }
    });
  }); 
}