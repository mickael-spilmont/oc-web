function askWeather() {
  // 1
  let request = new XMLHttpRequest();

  // 2
  request.onreadystatechange = function() {
    // 3
    if (this.readyState === 4 && this.status === 200) {
      // 4
      let response = JSON.parse(this.responseText);
      document.getElementById('weather-result').innerHTML = response.current_condition.condition;
    }
  };
  request.open('GET', 'https://www.prevision-meteo.ch/services/json/paris', true);
  request.send();
};

document.getElementById('ask-weather').addEventListener('click', function(event) {
  askWeather();
});

/*
1. Création de l'objet permettant de réaliser des requettes HTTP

2. On communique à l'objet de requette http la fonction qui effectuera le travail
  d'analyse de la requette. Pour cela on l'assigne à la proprièté onreadystatechange
  de l'objet, elle est définie au vol

3. On vérifie l'état de la requette, si cette valeur est 4 cela signifie que la
  réponse du serveur a été reçue dans son intégralité et qu’elle peut maintenant
  être traitée.
  La seconde vérification concerne le code d'état de la réponse HTTP du serveur,
  200 = Ok

4. Ici la réponse envoyée par le serveur est un objet JSON envoyé sous forme d'une
  chaine de texte (d'où l'utilisation de la méthode responseText).
  On la parse pour récupérer l'objet correspondant.
*/
