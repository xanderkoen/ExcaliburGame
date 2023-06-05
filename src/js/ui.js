import {
    Engine,
    TextAlign,
    BaseAlign,
    Line,
    Label,
    Text,
    FontUnit,
    Vector,
    Color,
    Circle,
    ScreenElement,
    Font,
    GraphicsGroup, vec
} from 'excalibur'
import {Resources} from "./resources.js";

// screenelement heeft geen collision, altijd on top, beweegt niet mee met camera
// beperking: je kan alleen text en graphics toevoegen via graphics.add
// geeft warning Excalibur only supports convex polygon colliders
export class UI extends ScreenElement {

    score = 0
    scoreText
    livesText

    constructor() {
        super({x: 10, y: 10})
    }

    onInitialize(engine) {
        this.scoreText = new Text({
            text: `Banaantjes : ${this.score}`,
            font: new Font({
                unit: FontUnit.Px,
                size: 30,
                color: Color.White,
                baseAlign: BaseAlign.Top
            }),
        })
        this.graphics.add(this.scoreText)

        this.livesText = new Text({
            text: `Lives : 3`,
            font: new Font({
                unit: FontUnit.Px,
                size: 30,
                color: Color.White,
            }),
        })
        this.livesText.pos = new Vector(0,20)
        this.graphics.add(this.livesText)

    }

    reset() {
        this.score = 0
        this.scoreText.text = 'Banaantjes : 0'
    }

    updateScore() {
        this.score++
        this.scoreText.text = `Banaantjes: ${this.score}`
    }

    updatelife(e) {
        this.livesText.text = `Lives : ${e}`
    }
}
