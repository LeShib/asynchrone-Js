const button = document.getElementById("btn");
const zelda = fetch("tloz.json");
const body = document.querySelector("body");
const listElement = document.createElement("ul");

// charger 
function loadList() {
    fetch('tloz.json')
        .then(response => response.json())
        .then(data => generateList(data.games))
        .catch(error => console.log('Erreur de chargement du fichier JSON:', error));
}
  
function generateList(games) {
    listElement.innerHTML = ''; 
    games.forEach(game => {
        const gameName = document.createElement('li');
        const gameDate = document.createElement('li');
        const gameProd = document.createElement('li');
        const gamePlatforms = document.createElement('li');
        const platformsList = document.createElement('ul');
  
        gameName.textContent = `Nom: ${game.name}`;
        gameDate.textContent = `Date de sortie: ${game.date}`; 
        gameProd.textContent = `Producteur: ${game.Producer}`;
        gamePlatforms.textContent = "Plateformes :";
      
        game.platforms.forEach(platform => {
            const platformItem = document.createElement('li');
            platformItem.textContent = platform;
            platformsList.appendChild(platformItem);
        });
  
        listElement.appendChild(gameName);
        listElement.appendChild(gameDate);
        listElement.appendChild(gameProd);
        listElement.appendChild(gamePlatforms);
        listElement.appendChild(platformsList);
    });
    body.appendChild(listElement);
}

button.addEventListener("click", loadList);