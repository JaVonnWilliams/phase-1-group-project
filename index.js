const url = "https://rickandmortyapi.com/api/character/";

const cardsContainer = document.getElementById("card-container");

cardsContainer.className = 'container'


fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    // console.log(data.results);
    const characterList = data.results;
    characterList.forEach((character) => {
      console.log(character);
      const card = document.createElement("article");
      // create and populate name element
      const nameElement = document.createElement("p");
      nameElement.textContent = character.name;
      // create and populate image element
      const imageElement = document.createElement("img");
      imageElement.src = character.image;
      // create place of origin element
      const originElement = document.createElement("p");
      originElement.textContent = `Place of origin: ${character.origin.name}`;
    
      card.className = 'container'
      cardsContainer.append(card);
      card.append(nameElement, imageElement, originElement);
    });
  });
