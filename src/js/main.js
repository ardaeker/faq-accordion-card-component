const accordion = document.getElementsByClassName("faq-item");
const activeItems = document.getElementsByClassName("active");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.toggle("active");
    } else {
      for (i = 0; i < activeItems.length; i++) {
        activeItems[i].classList.toggle("active");
      }
      this.classList.toggle("active");
    }
  });
}
