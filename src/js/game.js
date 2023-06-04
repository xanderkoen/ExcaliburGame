import '../css/style.css'
import { Actor, Engine, Vector, Physics } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { MainMenu } from '../scenes/mainMenu.js'
import { startMap } from '../scenes/startMap.js'

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
        const levelone = new startMap()

        //voeg ze toe als scene
        this.addScene('MainMenu', mainMenu)
        this.addScene('levelOne', levelone)

        //ga naar main menu
        this.goToScene('MainMenu')
    }
}

new Game()