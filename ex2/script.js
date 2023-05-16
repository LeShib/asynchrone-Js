const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);

fetchName("Wong")
.then((response) => response.json())
.then((json) => {
	console.log(json.age);
	console.log(json.count);
})
.catch((error) => {
	console.log("There was an error!", error);
});

const but = document.getElementById("button");

function fetchAge() {
    let name = document.getElementById('nameInput').value;

    if (name === '') {
        alert('Veuillez entrer un nom');
        return;
    }

    let apiUrl = 'https://api.agify.io/?name=' + name;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let resultsDiv = document.getElementById('results');
        let resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.textContent = 'Le prénom ' + data.name + ' a un âge moyen de ' + data.age + '.';
        resultsDiv.appendChild(resultDiv);
    })
    .catch(error => {
        console.log('Une erreur s\'est produite lors de la récupération des données de l\'API', error);
    });
}

function fetchAge() {
    let name = document.getElementById('nameInput').value;
    let country = document.getElementById('countrySelect').value;

    if (name === '') {
        alert('Veuillez entrer un nom');
        return;
    }

    let apiUrl = 'https://api.agify.io/?name=' + name;

    if (country !== '') {
        apiUrl += '&country_id=' + country;
    }

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let resultsDiv = document.getElementById('results');
        let resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.textContent = 'Le prénom ' + data.name + ' a un âge moyen de ' + data.age + '.';
        resultsDiv.appendChild(resultDiv);

        // Stockage des résultats dans le localStorage
        let previousResults = JSON.parse(localStorage.getItem('previousResults')) || [];
        previousResults.push(data);
        localStorage.setItem('previousResults', JSON.stringify(previousResults));
    })
    .catch(error => {
        console.log('Une erreur s\'est produite lors de la récupération des données de l\'API', error);
    });
}

but.addEventListener("click", fetchAge);