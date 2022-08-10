let currPage = 1;
const myDiv = document.querySelector("#content");

function nextPage() {
  currPage++;
  myDiv.innerHTML = `<object type="text/html" data="pages/000${currPage}.html" class="full" ></object>`;
}

function prevPage() {
  currPage--;
  myDiv.innerHTML = `<object type="text/html" data="pages/000${currPage}.html" class="full" ></object>`;
}

window.addEventListener("load", () => {
  myDiv.innerHTML = `<object type="text/html" data="pages/000${currPage}.html" class="full" ></object>`;
});

$(window).bind("mousewheel DOMMouseScroll", function (event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // scroll up
    if (currPage > 1) {
      prevPage();
    }
  } else {
    // scroll down
    nextPage();
  }
});

$(".full").bind("mousewheel DOMMouseScroll", function (event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // scroll up
    if (currPage > 1) {
      prevPage();
    }
  } else {
    // scroll down
    nextPage();
  }
});
