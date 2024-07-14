import Game from "./gameModel.js";

export default class gameLibrary {
    constructor() {
        this.games = [];
    }

    addGame(game) {
        this.games.push(game);
    }

    getAllGames() {
        return this.games;
    }

    saveToLocalStorage() {
        localStorage.setItem('games', JSON.stringify(this.games));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('games');
        if (data) {
            this.game = [];
            const localGames = JSON.parse(data);
            for (const game of localGames) {
                this.game.push(new Game(game.title, game.genre, game.year, game.cover))
            }
        }
    }
}