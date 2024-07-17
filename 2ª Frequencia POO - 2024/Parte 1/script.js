let eggsList = ["", "DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png", "DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png", "DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png"];
let eggPositions = [];

function eggPosition() {
    let positionEgg1 = Math.floor(Math.random() * 12) + 1;
    let positionEgg2;
    do {
        positionEgg2 = Math.floor(Math.random() * 12) + 1;
    } while (positionEgg2 === positionEgg1);

    // Store positions
    eggPositions = [positionEgg1, positionEgg2];
    console.log(eggPositions);
}

// Function to handle button click
function handleButtonClick(position) {
    if (eggPositions.includes(position)) {
        document.getElementById(`img${position}`).style.backgroundImage = "url('Ovo.png')";
    }
}

// Add event listeners to buttons
for (let i = 1; i <= 12; i++) {
    document.getElementById(`btn${i}`).addEventListener('click', () => handleButtonClick(i));
}

// Initialize egg positions
eggPosition();