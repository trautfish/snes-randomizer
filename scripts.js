const apiKey = "bf4137f12548475d927071b3c7d50afd";

const getGames = async () => {
    return await fetch("https://api.rawg.io/api/games?platforms=79&page_size=40&key=" + apiKey)
        .then(response => response.json());
};

const getGamesJSON = async () => {
    let gameData

    await getGames()
        .then(function (games) {
            gameData = games;
        });

    return gameData.results;
};

// anon function will contain everything here on out
// runs on page load/refresh
// function randomize will be a randomizer function + onClick to button

(async () => {
    let gamesJSON = await getGamesJSON();

    const randomize = gamesJSON.sort(() => Math.random() - 0.5);

    const randomizedGames = randomize;
    const gameToDisplay = randomizedGames[0];
    console.log(randomizedGames);
    console.log(gameToDisplay);

    var d = new Date(gameToDisplay.released);
    console.log(d.getFullYear());

    document.getElementById('image').src = gameToDisplay.background_image;
    document.getElementById('title').innerHTML = gameToDisplay.name;
    document.getElementById('year').innerHTML = d.getFullYear();
    document.getElementById('genre').innerHTML = gameToDisplay.genres[0].name;
})();