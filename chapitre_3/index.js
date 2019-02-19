let pElt = document.createElement('p');
document.getElementById('main').appendChild(pElt);
pElt.innerHTML = 'Mon <strong>grand</strong> contenu';
pElt.classList.add('important');
pElt.style.color = 'green';
