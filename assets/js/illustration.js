const days07 = document.getElementById("days-07");
// where "container" is the id of the container
days07.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        days07.scrollLeft += 100;
      e.preventDefault();
// prevenDefault() will help avoid worrisome 
// inclusion of vertical scroll 
    }
    else {
        days07.scrollLeft -= 100;
      e.preventDefault();
    }
  });

// user can rearrange artwork
$(".artwork-container").sortable();