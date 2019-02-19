let parentElt = document.getElementById('parent');
let parentCountElt = document.getElementById('parent-count');

let childElt =  document.getElementById('child');
let childCountElt = document.getElementById('child-count');

parentElt.addEventListener('click', function() {
  parentCountElt.innerHTML = Number(parentCountElt.textContent) + 1;
});

childElt.addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  childCountElt.innerHTML = Number(childCountElt.textContent) +1;
});
