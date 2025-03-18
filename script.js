console.log("Script loaded");

const charactersContainer = document.getElementById("characters-container");

const friendsCharacters = [
  {
    name: "Rachel Green",
    status: "Alive",
    occupation: "Fashion Executive",
    image: "https://static.wikia.nocookie.net/friends/images/f/f7/Rachel_Greene.jpg"
  },
  {
    name: "Ross Geller",
    status: "Alive",
    occupation: "Paleontologist",
    image: "https://static.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg"
  },
  {
    name: "Monica Geller",
    status: "Alive",
    occupation: "Chef",
    image: "https://static.wikia.nocookie.net/friends/images/2/2f/Monica_Geller-Bing_Season_10.png"
  },
  {
    name: "Chandler Bing",
    status: "Alive",
    occupation: "Advertiser",
    image: "https://static.wikia.nocookie.net/friends/images/1/10/10chandler.png"
  },
  {
    name: "Phoebe Buffay",
    status: "Alive",
    occupation: "Masseuse<br>Musician",
    image: "https://static.wikia.nocookie.net/friends/images/5/57/10phoebe.png"
  },
  {
    name: "Joey Tribbiani",
    status: "Alive",
    occupation: "Actor",
    image: "https://static.wikia.nocookie.net/friends/images/4/43/10joey.png"
  }
];

const createCharacterCard = (character) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${character.image}" alt="Image of ${character.name}" class="character-image">
        <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
      </div>
      <div class="card-back">
        <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
        <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
        <p class="character-detail"><span class="attribute">Occupation:</span> ${character.occupation}</p>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });

  return card;
};

friendsCharacters.forEach(character => {
  const card = createCharacterCard(character);
  charactersContainer.appendChild(card);
});