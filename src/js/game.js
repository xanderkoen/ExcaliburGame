import '../css/style.css'
import { Actor, Engine, Vector, Physics } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { MainMenu } from '../scenes/mainMenu.js'
import { startMap } from '../scenes/startMap.js'
import {secondLevel} from "../scenes/SecondLevel.js";
import { gameOver} from "../scenes/gameOver.js";

export class Game extends Engine {

    constructor() {
        super({
            width: 800,
            height: 600,
            displayMode: 'FitScreenAndFill'
        })
        console.log("dit is de game.js")

        Physics.acc = new Vector(0, 800)

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        //maak de levels aan
        const mainMenu = new MainMenu()
        const gameover = new gameOver()
        const levelone = new startMap()
        const leveltwo = new secondLevel()

        //voeg ze toe als scene
        this.addScene('MainMenu', mainMenu)
        this.addScene('gameOver', gameover)
        this.addScene('levelOne', levelone)
        this.addScene('levelTwo', leveltwo)

        //ga naar main menu
        this.goToScene('MainMenu')
    }
}

new Game()