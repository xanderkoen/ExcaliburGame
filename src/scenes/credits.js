import { Engine, Actor, Scene, vec, Vector, Label, FontUnit, Font, Color, Input} from "excalibur";
import { Resources } from "../js/resources.js";

export class Cresits extends Scene {
    text

    onInitialize(engine) {
        console.log("Credits")

        //add bg image
        const image = new Actor({
            pos: new Vector(0,0),
            scale: vec(2, 1.2),
            anchor: vec(0,0)
        })

        image.graphics.use(Resources.Win.toSprite())
        this.add(image)


        //add text
        this.text = new Label({
            text: `Jij wint! \n Druk op enter om het Terug te gaan`,
            pos: new Vector(this.engine.screen.resolution.width / 2, engine.screen.resolution.height / 2),
            font: new Font({
                unit: FontUnit.Px,
                size: 30,
                color: Color.White,
                bold: true,
                shadow: {
                    blur: 50,
                    offset: new Vector(10,10),
                    color: Color.Black,
                }
            })
        })
        this.add(this.text)
    }

    onActivate(ctx) {
        if (ctx.data) {
            this.logScore(ctx.data.banaantjes, ctx.data.lives)
        }
        this.CreditsMusic()
    }

    logScore(score, lives){
        this.text.text = `Jij wint! \n Druk op enter om Terug te gaan \n Je Hebt in totaal ${score} bananen verzameld \n Met nog ${lives} levens over`
    }

    CreditsMusic() {
        //play music
        const bgm1 = Resources.Credits
        bgm1.play(0.1)
    }


    onPreUpdate(engine, delta) {
        if(engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.StartMusic()
            engine.goToScene('MainMenu')
        }
    }

    StartMusic() {
        //stop credits music
        const bgm1 = Resources.Credits
        bgm1.stop()
    }
}