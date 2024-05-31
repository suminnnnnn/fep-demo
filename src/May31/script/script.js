let grid = document.body.querySelector('#grid');
let stickies = document.body.querySelectorAll('.column > .sticky');
stickies.forEach((eachSticky, idx) => {
  eachSticky.dataset.nth = idx + 1;
  eachSticky.addEventListener('click', (e) => {
    let clickedNth = e.currentTarget.dataset.nth;
    grid.dataset.selectedNth = clickedNth;
  });
});
