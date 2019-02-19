document.getElementById('name').addEventListener('input', function(event) {
    document.getElementById('res-name').innerHTML = event.target.value;
});

document.getElementById('gender').addEventListener('change', function(event) {
  document.getElementById('res-gender').innerHTML = event.target.value;
});

document.getElementById('result').addEventListener('mousemove', function(event) {
  document.getElementById('mouse-x').innerHTML = event.offsetX;
  document.getElementById('mouse-y').innerHTML = event.offsetY;
});
