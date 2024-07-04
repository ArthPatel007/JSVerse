window.onscroll = function() {updateScrollIndicator()};

function updateScrollIndicator() {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".progress").style.width = scrolled + "%";
}